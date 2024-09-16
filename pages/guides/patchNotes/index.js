import { Fragment } from "react";
import { useModal } from "src/utils/ModalContext";
import Layout from "@components/layout";
import SEO from "@components/SEO";
import WalletModal from "@components/modal/walletModal/WalletModal";
import MetamaskModal from "@components/modal/metamaskModal/MetamaskModal";
import Header from "@sections/Header/v2";
import PageHeader from "@sections/ProjectPages/ProjectsList/PageHeader";
import PatchNotes from "@sections/Guides/PatchNotes";
import Footer from "@sections/Footer/v1";
import GuidesNav from "src/components/guidesNav";

export default function ChampionsTrends() {
  const { walletModalvisibility, metamaskModal } = useModal();
  return (
    <Fragment>
      <SEO title="project list page" />
      <Layout>
        {walletModalvisibility && <WalletModal />}
        {metamaskModal && <MetamaskModal />}
        <Header />
        <PageHeader currentPage="Patch Notes" pageTitle="Guide" />
        <GuidesNav selected={"patchNotes"} />
        <PatchNotes />
        <Footer />
      </Layout>
    </Fragment>
  );
}
