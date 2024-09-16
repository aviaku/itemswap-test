"use client";
import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import { useModal } from "src/utils/ModalContext";
import SEO from "@components/SEO";
import Layout from "@components/layout";
import WalletModal from "@components/modal/walletModal/WalletModal";
import MetamaskModal from "@components/modal/metamaskModal/MetamaskModal";
import Header from "@sections/Header/v2";
import PageHeader from "@sections/ProjectPages/ProjectsList/PageHeader";
import ChampionCards from "@sections/ChampionCards";
import Footer from "@sections/Footer/v1";

export default function Champion() {
  const { walletModalvisibility, metamaskModal } = useModal();
  const router = useRouter();
  const { champion } = router.query;
  console.log(champion);
  return (
    <Fragment>
      <SEO title="igo ranking page" />
      <Layout>
        {walletModalvisibility && <WalletModal />}
        {metamaskModal && <MetamaskModal />}
        <Header />
        <PageHeader currentPage="CHAMPIONS" pageTitle="CHAMPIONS" />
        <ChampionCards />
        <Footer />
      </Layout>
    </Fragment>
  );
}
