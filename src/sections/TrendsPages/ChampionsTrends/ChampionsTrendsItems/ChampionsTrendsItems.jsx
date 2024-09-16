import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../../../../../i18n";
import "react-tooltip/dist/react-tooltip.css";
import ReactTltp from "src/components/tooltip/ReactTltp";
import { FaSortAmountDownAlt, FaSortAmountUp } from "react-icons/fa";
import metaDeckChampions from "../../../../data/trends/metaDeckChampions.json";
import Comps from "../../../../data/compsNew.json";
import CardImage from "src/components/cardImage";

const ProjectItems = () => {
  const { t } = useTranslation();
  const others = t("others");
  const metaDeckChampionsStats =
    metaDeckChampions.metaDeckChampion.metaDeckChampionStats;

  const [metaDeckChampionsStatsData, setMetaDeckChampionsStatsData] = useState(
    metaDeckChampionsStats
  );
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  useEffect(() => {
    let sortedData = [...metaDeckChampionsStats];
    if (sortConfig !== null) {
      sortedData.sort((a, b) => {
        let aValue, bValue;

        if (["firstPick", "secondPick", "thirdPick"].includes(sortConfig.key)) {
          const index =
            sortConfig.key === "firstPick"
              ? 0
              : sortConfig.key === "secondPick"
                ? 1
                : 2;
          aValue = a.augmentRoundStats[index]?.avgPlacement || 0;
          bValue = b.augmentRoundStats[index]?.avgPlacement || 0;
        } else if (["tops", "wins"].includes(sortConfig.key)) {
          // calculate the top percentage and win percentage based on the plays
          aValue = (a[sortConfig.key] * 100) / a.plays;
          bValue = (b[sortConfig.key] * 100) / b.plays;
        } else {
          aValue = a[sortConfig.key];
          bValue = b[sortConfig.key];
        }

        if (aValue < bValue) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    setMetaDeckChampionsStatsData(sortedData);
  }, [metaDeckChampionsStats, sortConfig]);

  const requestSort = (key) => {
    console.log("key", key);
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const {
    props: {
      pageProps: {
        dehydratedState: {
          queries: { data },
        },
      },
    },
  } = Comps;
  const { champions } = data?.refs;
  const { items } = data?.refs;
  return (
    // <ProjectItemsStyleWrapper>
    <div className="container md:!max-w-[95%] px-0">
      {/* <TrendFilters
        dropdown1={["v14.2", "v14.1"]}
        dropdown2={[
          "All Ranks",
          "Iron",
          "Bronze",
          "Silver",
          "Gold",
          "Platinum",
          "Diamond",
          "Master",
          "Grandmaster",
          "Challenger",
        ]}
      /> */}
      <div className="projects-row overflow-auto md:overflow-hidden mt-6">
        <div>
          <table className="w-[900px] md:w-full border-separate border-spacing-y-2">
            <tr>
              <th className="th1">
                <p className="p-0 text-sm md:text-base mb-0 text-center py-4 text-[#fff]">
                  #
                </p>
              </th>
              <th
                className={`cursor-pointer ${sortConfig?.key === "key" ? "bg-[#000000]" : ""}`}
                onClick={() => requestSort("key")}
              >
                <p className="p-0 text-sm md:text-base mb-0 text-left py-4 text-[#fff]">
                  {others.champion}
                  <span className="ml-2">
                    {sortConfig?.key === "key" ? (
                      sortConfig.direction === "ascending" ? (
                        <FaSortAmountUp />
                      ) : (
                        <FaSortAmountDownAlt />
                      )
                    ) : null}
                  </span>
                </p>
              </th>
              <th
                className={`cursor-pointer ${sortConfig?.key === "avgPlacement" ? "bg-[#000000]" : ""}`}
                onClick={() => requestSort("avgPlacement")}
              >
                <p className="p-0 text-sm md:text-base mb-0 text-left py-4 text-[#fff]">
                  {others.avgRank}
                  <span className="ml-2">
                    {sortConfig?.key === "avgPlacement" ? (
                      sortConfig.direction === "ascending" ? (
                        <FaSortAmountUp />
                      ) : (
                        <FaSortAmountDownAlt />
                      )
                    ) : null}
                  </span>
                </p>
              </th>
              <th
                className={`cursor-pointer ${sortConfig?.key === "tops" ? "bg-[#000000]" : ""}`}
                onClick={() => requestSort("tops")}
              >
                <p className="p-0 text-sm md:text-base mb-0 text-left py-4 text-[#fff]">
                  {others.top4}
                  <span className="ml-2">
                    {sortConfig?.key === "tops" ? (
                      sortConfig.direction === "ascending" ? (
                        <FaSortAmountUp />
                      ) : (
                        <FaSortAmountDownAlt />
                      )
                    ) : null}
                  </span>
                </p>
              </th>
              <th
                className={`cursor-pointer ${sortConfig?.key === "wins" ? "bg-[#000000]" : ""}`}
                onClick={() => requestSort("wins")}
              >
                <p className="p-0 text-sm md:text-base mb-0 text-left py-4 text-[#fff]">
                  {others.winsPercentage}
                  <span className="ml-2">
                    {sortConfig?.key === "wins" ? (
                      sortConfig.direction === "ascending" ? (
                        <FaSortAmountUp />
                      ) : (
                        <FaSortAmountDownAlt />
                      )
                    ) : null}
                  </span>
                </p>
              </th>
              <th
                className={`cursor-pointer ${sortConfig?.key === "pickRate" ? "bg-[#000000]" : ""}`}
                onClick={() => requestSort("pickRate")}
              >
                <p className="p-0 text-sm md:text-base mb-0 text-left py-4 text-[#fff]">
                  {others?.pickPercentage}
                  <span className="ml-2">
                    {sortConfig?.key === "pickRate" ? (
                      sortConfig.direction === "ascending" ? (
                        <FaSortAmountUp />
                      ) : (
                        <FaSortAmountDownAlt />
                      )
                    ) : null}
                  </span>
                </p>
              </th>
              <th
                className={`cursor-pointer ${sortConfig?.key === "plays" ? "bg-[#000000]" : ""}`}
                onClick={() => requestSort("plays")}
              >
                <p className="p-0 text-sm md:text-base mb-0 text-left py-4 text-[#fff]">
                  {others?.played}
                  <span className="ml-2">
                    {sortConfig?.key === "plays" ? (
                      sortConfig.direction === "ascending" ? (
                        <FaSortAmountUp />
                      ) : (
                        <FaSortAmountDownAlt />
                      )
                    ) : null}
                  </span>
                </p>
              </th>
              <th>
                <p className="p-0 text-sm md:text-base mb-0 text-left py-4 text-[#fff]">
                  {others?.threeStarsPercentage}
                </p>
              </th>
              <th>
                <p className="p-0 text-sm md:text-base mb-0 text-left py-4 text-[#fff]">
                  {others?.threeStarsRank}
                </p>
              </th>
              <th>
                <p className="p-0 text-sm md:text-base mb-0 text-left py-4 text-[#fff]">
                  {others?.recommended} {others.items}
                </p>
              </th>
            </tr>
            {metaDeckChampionsStatsData.map(
              (champion, index) =>
                champions.find((champ) => champ.key === champion.key)?.key && (
                  <tr
                    className="m-2 bg-[#1a1b31] hover:bg-[#292a4ae0]"
                    key={index}
                  >
                    <td className="ml-2">
                      <div className="text-center">{index + 1}</div>
                    </td>
                    <td>
                      <div>
                        <div className="flex justify-start items-center">
                          <div className="relative">
                            <CardImage
                              src={champions.find(
                                (champ) => champ.key === champion.key
                              )}
                              imgStyle="w-[68px] md:w-[112px]"
                              identificationImageStyle="w=[16px] md:w-[32px]"
                              textStyle="text-[10px] md:text-[16px] hidden"
                            />
                          </div>
                          <p className="p-0 text-left text-sm md:text-xl mb-0 ml-2 text-[#fff]">
                            {
                              champions.find(
                                (champ) => champ.key === champion.key
                              )?.key
                            }
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="p-0 text-left text-sm md:text-lg mb-0 text-[#fff]">
                        #{champion?.avgPlacement}
                      </p>
                    </td>
                    <td>
                      <p className="p-0 text-left text-sm md:text-lg mb-0 text-[#fff]">
                        {((champion?.tops * 100) / champion?.plays).toFixed(2)}%
                      </p>
                    </td>
                    <td>
                      <p className="p-0 text-left text-sm md:text-lg mb-0 text-[#fff]">
                        {((champion?.wins * 100) / champion?.plays).toFixed(2)}%
                      </p>
                    </td>
                    <td>
                      <p className="p-0 text-left text-sm md:text-lg mb-0 text-[#fff]">
                        {(champion?.pickRate * 100).toFixed(2)}%
                      </p>
                    </td>
                    <td>
                      <p className="p-0 text-left text-sm md:text-lg mb-0 text-[#fff]">
                        {champion?.plays.toLocaleString("en-US")}
                      </p>
                    </td>
                    <td>
                      <p className="p-0 text-left text-sm md:text-lg mb-0 text-[#fff]">
                        {(
                          champion?.championTierStats?.[2]?.pickRate * 100
                        ).toFixed(2)}
                        %
                      </p>
                    </td>
                    <td>
                      <p className="p-0 text-left text-sm md:text-lg mb-0 text-[#fff]">
                        #
                        {(champion?.championTierStats?.[2]?.avgPlacement).toFixed(
                          2
                        )}
                      </p>
                    </td>
                    <td>
                      <div className="flex justify-start items-center">
                        {champions
                          .find((champ) => champ.key === champion.key)
                          ?.recommendItems.map(
                            (item) =>
                              items.find(
                                (i) =>
                                  i.key ===
                                  item?.split("_")[item?.split("_").length - 1]
                              )?.imageUrl
                            // item?.split("_")[item?.split("_").length - 1]
                          )
                          .map(
                            (item) =>
                              item && (
                                <>
                                  <img
                                    src={item}
                                    className="w-12 md:w-16 mr-2"
                                    alt="icon"
                                    data-tooltip-id={item}
                                  />
                                  <ReactTltp
                                    variant="item"
                                    id={item}
                                    content={items.find(
                                      (i) => i.imageUrl === item
                                    )}
                                  />
                                </>
                              )
                          )}
                      </div>
                    </td>
                  </tr>
                )
            )}
          </table>
        </div>
      </div>
    </div>
    // </ProjectItemsStyleWrapper>
  );
};

export default ProjectItems;
