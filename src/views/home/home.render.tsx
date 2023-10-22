import { Navigation } from "@/components/navigation";
import { Layout } from "@/templates/layout";

export function HomeRender() {
  console.log('home rener')
  return (
    <Layout>
      <Navigation />
    </Layout>
  );
}
