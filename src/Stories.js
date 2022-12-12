import React from "react";
import moment from "moment";

import { useGlobalContext } from "./context";

const Stories = () => {
  const { isLoading, hits, removeStory } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="stories">
      {hits.map((story) => {
        const {
          objectID,
          title,
          url,
          points,
          author,
          num_comments,
          created_at: date,
        } = story;
        return (
          <article key={objectID} className="story">
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} points by <span>{author} | </span>
              {num_comments} comments
            </p>
            <p>{moment(date).format("MMMM Do YYYY, h:mm:ss a")}</p>
            <div>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="read-link"
              >
                read more
              </a>
              <button
                className="remove-btn"
                onClick={() => removeStory(objectID)}
              >
                remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
