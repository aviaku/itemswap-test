import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import nextArrowIcon from "@assets/images/icons/next-arrow.png";
import ProjectCard from "../AugmentsTrendsCard/AugmentsTrendsCard";
import ProjectItemsStyleWrapper from "./TrendsItems.style";
import projectsData from "@assets/data/projects/dataV6";

import coinIcon1 from "@assets/images/project/previous-image.png";
import coinIcon2 from "@assets/images/project/previous-image2.png";
import coinIcon3 from "@assets/images/project/previous-image3.png";
import coinIcon4 from "@assets/images/project/chain.png";

const ProjectItems = () => {
  const { data } = projectsData;
  return (
    <ProjectItemsStyleWrapper>
      <div className="container">
        <div className="row">
          <ul className="menu-list">
            <li>Name</li>
            <li>Traits</li>
            <li>Comp</li>
            <li>Coin</li>
            <li>Progress</li>
          </ul>
        </div>
        <div className="projects-row">
          <Tabs>
            <TabList>
              <div className="tab_btn_wrapper">
                {data?.map((project, i) => (
                  <Tab key={i}>
                    <button>{project.projectName}</button>
                  </Tab>
                ))}
              </div>
              <div className="item_sorting_list">
                <button>
                  All Access
                  <img src={nextArrowIcon.src} alt="icon" />
                  <ul className="sub-menu">
                    <li>All Access</li>
                    <li>Public</li>
                    <li>Private</li>
                    <li>Community</li>
                  </ul>
                </button>
                <button>
                  All Block Chain
                  <img src={nextArrowIcon.src} alt="icon" />
                  <ul className="sub-menu">
                    <li>
                      <img src={coinIcon1.src} alt="icon" /> Binance (BSC)
                    </li>
                    <li>
                      <img src={coinIcon2.src} alt="icon" /> Ethereum (ETH)
                    </li>
                    <li>
                      <img src={coinIcon3.src} alt="icon" /> Polygon
                    </li>
                    <li>
                      <img src={coinIcon4.src} alt="icon" /> All Block Chain
                    </li>
                  </ul>
                </button>
              </div>
            </TabList>

            {data?.map((item, i) => (
              <TabPanel key={i} className="row tabs-row">
                {item.projects?.map((project, i) => (
                  <div key={i} className="col-md-12">
                    <ProjectCard {...project} />
                  </div>
                ))}
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>
    </ProjectItemsStyleWrapper>
  );
};

export default ProjectItems;
