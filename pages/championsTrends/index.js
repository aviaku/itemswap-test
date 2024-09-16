import { Fragment } from "react";
import { useModal } from "src/utils/ModalContext";
import Layout from "@components/layout";
import SEO from "@components/SEO";
import WalletModal from "@components/modal/walletModal/WalletModal";
import MetamaskModal from "@components/modal/metamaskModal/MetamaskModal";
import Header from "@sections/Header/v2";
import PageHeader from "@sections/ProjectPages/ProjectsList/PageHeader";
import ProjectsList from "@sections/TrendsPages/ChampionsTrends";
import Footer from "@sections/Footer/v1";
import TrendsNav from "src/components/trendsNav";

export default function ChampionsTrends() {
  const { walletModalvisibility, metamaskModal } = useModal();
  return (
    <Fragment>
      <SEO title="Champions Trends" />
      <Layout>
        {walletModalvisibility && <WalletModal />}
        {metamaskModal && <MetamaskModal />}
        <Header />
        <PageHeader
          currentPage="CHAMPIONS TRENDS"
          pageTitle="CHAMPIONS TRENDS"
        />
        <TrendsNav selected={"championsTrends"} />
        <ProjectsList />
        <Footer />
      </Layout>
    </Fragment>
  );
}
