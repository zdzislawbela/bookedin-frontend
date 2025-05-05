import { Calendar } from "../components/calendar";

import { useAuthUser } from "@/hooks/useAuthUser";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DashboardPage() {
  const { user, isLoadingUser } = useAuthUser();

  if (isLoadingUser) {
    return (
      <DefaultLayout>
        <section className="flex items-center justify-center py-20">
          <p className="text-lg font-medium">Checking access...</p>
        </section>
      </DefaultLayout>
    );
  }

  if (!user) {
    return (
      <DefaultLayout>
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <div className="inline-block max-w-lg text-center justify-center">
            <h1 className={title()}>Dashboard</h1>
            <p className="mt-4 text-default-500">
              Log in to see BookedIn in action.
            </p>
          </div>
        </section>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Dashboard</h1>
        </div>
        <Calendar />
      </section>
    </DefaultLayout>
  );
}
