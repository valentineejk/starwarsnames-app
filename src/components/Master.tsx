import React from "react";

interface Props {
  master: string;
}

const Master: React.FC<Props> = ({ master }) => {
  return (
    <div>
      <li>{master}</li>
    </div>
  );
};

export default Master;
