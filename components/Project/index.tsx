import React, { Fragment, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { openSpring, closeSpring } from "./animations";

const Project: React.FC<any> = ({ project, isSelected, onClick }) => {
  const { img, link, title } = project;
  const cardRef = useRef(null);
  const zIndex = useMotionValue(isSelected ? 2 : 0);
  const y = useMotionValue(0);
  return (
    <Fragment>
      <div className="project" onClick={onClick}>
        <div className={`project-container ${isSelected && "open"}`}>
          <motion.div
            ref={cardRef}
            className="card-content"
            style={{ zIndex, y }}
            layoutTransition={isSelected ? openSpring : closeSpring}
            // drag={isSelected ? "y" : false}
            // dragConstraints={constraints}
            // onDrag={checkSwipeToDismiss}
            // onUpdate={checkZIndex}
          >
            <div className="picture" />
            <a
              className="cover"
              href={link}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="coverText">{title}</span>
            </a>
          </motion.div>
        </div>
      </div>
      <style jsx>{`
          .project-container {
            width: 100%;
            height: 100%;
            position: relative;
            display: block;
            pointer-events: none;
          }
          .project-container.open {
            top: 0;
            left: 0;
            right: 0;
            position: fixed;
            z-index: 1;
            overflow: hidden;
            padding: 40px;
          }
          
          .project {
            max-width: 20rem;
            margin: 0.5rem;
            position: relative;
            width: 50%;
            height: 15rem;
            overflow: hidden;
            display: inline-flex;
            position: relative;
            border-width: 1px;
            border-radius: 2px;
            box-shadow: 0 2px 4px 2px rgba(0,0,0,0.1);
          }
          
          .card-content {
            pointer-events: auto;
            position: relative;
            border-radius: 20px;
            background: #1c1c1e;
            overflow: hidden;
            width: 100%;
            height: 100%;
            margin: 0 auto;
          }

          .open .card-content {
            height: auto;
            max-width: 700px;
            overflow: hidden;
          }

          .cover {
            position: absolute;
            bottom: 0;
            padding-left: 0.5em;
            padding-right: 0.5em;
            padding-top: 0.5em;
            padding-bottom: 0.5em;
            background-color: rgba(0, 0, 0, 0.5);
            width: 100%;
          }

          .coverText {
            font-size: 0.7rem;
            color: lightgray;
          }

          @media (max-width: 64em) {
            .project {
              width: 13em;
              height: 7.64em;
            }
          }

          @media (max-width: 45em) {
            .project {
              width: 10em;
              height: 5.88em;
            }
          }
          .picture {
            position: absolute;
            background-image: url('/static/${img}.jpeg');
            background-image: url('/static/${img}.webp');
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 50%;
          }
        `}</style>
    </Fragment>
  );
};

export default Project;
