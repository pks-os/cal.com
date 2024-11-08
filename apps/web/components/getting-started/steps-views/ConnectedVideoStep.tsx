import { useRouter } from "next/navigation";

import classNames from "@calcom/lib/classNames";
import { useLocale } from "@calcom/lib/hooks/useLocale";
import { userMetadata } from "@calcom/prisma/zod-utils";
import { trpc } from "@calcom/trpc/react";
import useMeQuery from "@calcom/trpc/react/hooks/useMeQuery";
import { Icon, List } from "@calcom/ui";

import { AppConnectionItem } from "../components/AppConnectionItem";
import { StepConnectionLoader } from "../components/StepConnectionLoader";

const ConnectedVideoStep = () => {
  const { data: queryConnectedVideoApps, isPending } = trpc.viewer.integrations.useQuery({
    variant: "conferencing",
    onlyInstalled: false,
    sortByMostPopular: true,
  });
  const { data } = useMeQuery();
  const { t } = useLocale();
  const router = useRouter();

  const metadata = userMetadata.parse(data?.metadata);

  const defaultConferencingApp = metadata?.defaultConferencingApp?.appSlug;

  const handleSubmit = () => {
    const redirectUrl = localStorage.getItem("onBoardingRedirect");
    localStorage.removeItem("onBoardingRedirect");
    redirectUrl ? router.push(redirectUrl) : router.push("/");
  };

  return (
    <>
      {!isPending && (
        <List className="bg-default  border-subtle divide-subtle scroll-bar mx-1 max-h-[45vh] divide-y !overflow-y-scroll rounded-md border p-0 sm:mx-0">
          {queryConnectedVideoApps?.items &&
            queryConnectedVideoApps?.items.map((item) => {
              if (item.slug === "daily-video") return null; // we dont want to show daily here as it is installed by default
              return (
                <li key={item.name}>
                  {item.name && item.logo && (
                    <AppConnectionItem
                      type={item.type}
                      title={item.name}
                      isDefault={item.slug === defaultConferencingApp}
                      description={item.description}
                      dependencyData={item.dependencyData}
                      logo={item.logo}
                      slug={item.slug}
                      installed={item.userCredentialIds.length > 0}
                      defaultInstall={
                        !defaultConferencingApp && item.appData?.location?.linkType === "dynamic"
                      }
                    />
                  )}
                </li>
              );
            })}
        </List>
      )}

      {isPending && <StepConnectionLoader />}
      <button
        type="button"
        data-testid="save-video-button"
        className={classNames(
          "text-inverted border-inverted bg-inverted mt-8 flex w-full flex-row justify-center rounded-md border p-2 text-center text-sm"
        )}
        onClick={handleSubmit}>
        {t("set_up_later")}
        <Icon name="arrow-right" className="ml-2 h-4 w-4 self-center" aria-hidden="true" />
      </button>
    </>
  );
};

export { ConnectedVideoStep };
