import React from "react";
import { Link } from "react-router-dom";
import Tilt from 'react-vanilla-tilt'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoCodeWorking, IoLogoHtml5,IoLogoJavascript, IoLogoReact, IoLogoCss3, IoLogoPython, } from "react-icons/io5";
import { AiOutlineConsoleSql } from "react-icons/ai";
export const Tools = () => {
	return (
		<div className="" style={{backgroundColor: "#4825C7"}} id="tools">
			<VerticalTimeline>
			<VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgba(225,225,225,0.1)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2020 - present"
    iconStyle={{ background: '	rgb(147,112,219)', color: '#fff' }}
    icon={<IoLogoHtml5/>}
  >
    <h3 className="vertical-timeline-element-title">Html</h3>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgba(225,225,225,0.1)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2020 - present"
    iconStyle={{ background: '	rgb(147,112,219)', color: '#fff' }}
    icon={<IoLogoCss3 />}
  >
    <h3 className="vertical-timeline-element-title">CSS</h3>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgba(225,225,225,0.1)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2020 - present"
    iconStyle={{ background: '	rgb(147,112,219)', color: '#fff' }}
    icon={<IoLogoJavascript />}
  >
    <h3 className="vertical-timeline-element-title">Javascript</h3>
    <p>
      Api/Fetch, Async/Await,  Promises , Object oriented, Events/Event Listeners/Dom
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgba(225,225,225,0.1)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2020 - present"
    iconStyle={{ background: '	rgb(147,112,219)', color: '#fff' }}
    icon={<IoLogoReact />}
  >
    <h3 className="vertical-timeline-element-title">React.Js</h3>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgba(225,225,225,0.1)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2020 - present"
    iconStyle={{ background: '	rgb(147,112,219)', color: '#fff' }}
    icon={<IoLogoPython />}
  >
    <h3 className="vertical-timeline-element-title">Python</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <p>
      Flask, SQLALchemy, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgba(225,225,225,0.1)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2020 - present"
    iconStyle={{ background: '	rgb(147,112,219)', color: '#fff' }}
    icon={<AiOutlineConsoleSql />}
  >
    <h3 className="vertical-timeline-element-title">SQL</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <p>
      Flask, SQLALchemy, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
			</VerticalTimeline>
		</div>
		
	);
};