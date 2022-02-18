import * as React from "react";
import { Tooltip } from "antd";

import { FaHeart } from "react-icons/fa";

export default function Favorite({ onClick, tooltip = "Add to favorites" }) {
  return (
    <Tooltip placement="rightTop" title={tooltip}>
      <FaHeart style={{ cursor: "pointer" }} onClick={onClick} />
    </Tooltip>
  );
}
