import { Fragment } from "react";
import { useModal } from "src/utils/ModalContext";
import Layout from "@components/layout";
import SEO from "@components/SEO";
import WalletModal from "@components/modal/walletModal/WalletModal";
import MetamaskModal from "@components/modal/metamaskModal/MetamaskModal";
import Header from "@sections/Header/v2";
import PageHeader from "@sections/ProjectPages/ProjectsList/PageHeader";
import BestItemsBuildsList from "@sections/TrendsPages/BestItemsBuilds";
import Footer from "@sections/Footer/v1";
import TrendsNav from "src/components/trendsNav";

export default function ItemsTrends() {
  const { walletModalvisibility, metamaskModal } = useModal();
  return (
    <Fragment>
      <SEO title="project list page" />
      <Layout>
        {walletModalvisibility && <WalletModal />}
        {metamaskModal && <MetamaskModal />}
        <Header />
        <PageHeader
          currentPage="BEST ITEMS BUILDS"
          pageTitle="BEST ITEMS BUILDS"
        />
        {/* <TrendsNav selected="bestItemsBuilds" /> */}
        <TrendsNav selected="bestItemsBuilds" />
        <BestItemsBuildsList />
        <Footer />
      </Layout>
    </Fragment>
  );
}
