import { Fragment } from "react";
import { useModal } from "src/utils/ModalContext";
import Layout from "@components/layout";
import SEO from "@components/SEO";
import WalletModal from "@components/modal/walletModal/WalletModal";
import MetamaskModal from "@components/modal/metamaskModal/MetamaskModal";
import Header from "@sections/Header/v2";
import PageHeader from "@sections/ProjectPages/ProjectsList/PageHeader";
import ItemsTrendsList from "@sections/TrendsPages/ItemsTrends";
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
        <PageHeader currentPage="ITEMS TRENDS" pageTitle="ITEMS TRENDS" />
        <TrendsNav selected="itemsTrends" />
        <ItemsTrendsList />
        <Footer />
      </Layout>
    </Fragment>
  );
}
