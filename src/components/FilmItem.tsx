import React from "react";

interface Props {
  url: any;
}

const FilmItem: React.FC<Props> = ({ url }) => {
  return (
    <div>
      <li>
        <a href={url}>{url}</a>
      </li>
    </div>
  );
};

export default FilmItem;
