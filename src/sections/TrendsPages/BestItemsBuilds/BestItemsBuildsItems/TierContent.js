import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../../../i18n";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Comps from "../../../../data/compsNew.json";
import ReactTltp from "src/components/tooltip/ReactTltp";
import CardImage from "src/components/cardImage";

const TierCard = ({ cost, itemsData }) => {
  const { t } = useTranslation();
  const others = t("others");
  const {
    props: {
      pageProps: {
        dehydratedState: {
          queries: { data },
        },
      },
    },
  } = Comps;

  const { metaDecks } = data?.metaDeckList;
  const { champions } = data?.refs;
  const { items } = data?.refs;
  const { traits } = data?.refs;
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  return (
    <Fragment>
      <div className="w-full bg-zinc-900 hidden md:block">
        <p className="text-center py-2 text-[#fff] text-[18px]">
          {others?.tier} {cost}
        </p>
      </div>
      <div className="w-full bg-zinc-900">
        <table className="w-full">
          <tbody>
            {itemsData.map((champion, index) => (
              <tr className="bg-[#1e293b] shadow-xl">
                <td className="text-center py-0">
                  <div className="flex pt-[8px] pr-0 pb-[8px] pl-[5px] gap-[6px] justify-between items-center">
                    <div className="flex flex-shrink-1 gap-[2px]">
                      <div className="flex flex-col relative">
                        <div className="flex justify-between gap-2">
                          <div className="shrink-1 flex gap-1">
                            <CardImage
                              src={champions?.find(
                                (c) => c?.key === champion?.key
                              )}
                              imgStyle="w-[112px] md:w-[96px]"
                              identificationImageStyle="w-[42px] md:w-[30px]"
                              textStyle="text-[10px] md:text-[16px]"
                            />
                          </div>
                        </div>
                      </div>
                      {champion?.championItemPairStats[0]?.keys.map((item) => (
                        <div className="flex gap-[1px] items-center">
                          <div
                            className="relative overflow-hidden w-[62px] md:w-[44px]"
                            data-tooltip-id={item}
                          >
                            <img
                              src={
                                items?.find((i) => i?.key === item)?.imageUrl
                              }
                              className=" border-[1px] border-[#ffffff60]"
                            />
                          </div>
                          <ReactTltp
                            variant="item"
                            id={item}
                            content={items?.find((i) => i?.key === item)}
                          />
                        </div>
                      ))}
                      {/* <div className="flex gap-[4px] items-center">
                        <div className="relative overflow-hidden">
                          <img src={indianWeapon.src} width={28} height={28} />
                        </div>
                      </div>
                      <div className="flex gap-[4px] items-center">
                        <div className="relative overflow-hidden">
                          <img src={indianWeapon.src} width={28} height={28} />
                        </div>
                      </div> */}
                    </div>
                    <button
                      className="flex px-[5px] py-[17px] cursor-pointer"
                      onClick={() =>
                        isAccordionOpen === cost + "" + index
                          ? setIsAccordionOpen(null)
                          : setIsAccordionOpen(cost + "" + index)
                      }
                    >
                      {isAccordionOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </button>
                  </div>
                  <table
                    className={`w-full table-fixed border-collapse bg-[#222231] ${
                      isAccordionOpen !== cost + "" + index ? "hidden" : ""
                    }`}
                  >
                    <thead className="table-row-group w-full text-[11px] font-[400]">
                      <tr className="text-center text-[14px] font-[400]">
                        <th className="pt-[5.25px] pr-0 pb-[5.25px] pl-[5px] text-center bg-[#27282e] text-[#d0d0d0] whitespace-nowrap">
                          Best Items
                        </th>
                        <th className="pt-[5.25px] pr-0 pb-[5.25px] text-center bg-[#27282e] text-[#d0d0d0] whitespace-nowrap w-[22%]">
                          Avg
                        </th>
                        <th className="pt-[5.25px] pr-0 pb-[5.25px] pl-[5px] text-center bg-[#27282e] text-[#d0d0d0] whitespace-nowrap w-[22%]">
                          Pick%
                        </th>
                      </tr>
                    </thead>
                    <tbody className="table-row-group w-full text-[11px] font-[400]">
                      {champion?.championItemPairStats.map((item, index) => (
                        <tr className="text-center text-[11px] font-[400]">
                          <td className="pt-[4px] pr-0 pb-[4px] pl-[5px] text-left text-[#d0d0d0] whitespace-nowrap">
                            <div className="flex justify-start items-center gap-[4px]">
                              {item?.keys.map((item) => (
                                <div className="rounded-full overflow-hidden border-[1px] border-[#ffffff60]">
                                  <div
                                    className="relative overflow-hidden"
                                    data-tooltip-id={item}
                                  >
                                    <img
                                      src={
                                        items?.find((i) => i?.key === item)
                                          ?.imageUrl
                                      }
                                      className="w-[56px] md:w-[44px]"
                                    />
                                  </div>
                                  <ReactTltp
                                    variant="item"
                                    id={item}
                                    content={items?.find(
                                      (i) => i?.key === item
                                    )}
                                  />
                                </div>
                              ))}
                            </div>
                          </td>
                          <td
                            className={`w-[52px] text-center py-[6px] text-[14px] ${item?.avgPlacement < 4 ? "text-yellow-200" : "text-[#fff]"}`}
                          >
                            #{item?.avgPlacement}
                          </td>
                          <td className="w-[52px] text-center py-[6px] text-[14px] text-[#fff]">
                            {(item?.pickRate * 100).toFixed(2)}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default TierCard;
