import React from "react";
import { channelTypeDTO } from "@dto/channelType.dto";

interface ChannelConditionDTO {
  channel: channelTypeDTO,
  PC: React.FC,
  MOBILE?: React.FC,
  GLOBAL?: React.FC,
}

export const ChannelCondition = ({
  channel,
  PC,
  MOBILE,
  GLOBAL,
}: ChannelConditionDTO) => {
  if (channel === 'PC') {
    return <PC />;
  }
  if (channel === 'MOBILE' && MOBILE) {
    return <MOBILE />;
  }
  if (channel === 'GLOBAL' && GLOBAL) {
    return <GLOBAL />;
  }

  return <PC />;
}

