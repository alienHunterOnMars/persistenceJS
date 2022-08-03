import { PartSetHeader, Part, BlockID, signedMsgTypeFromJSON, signedMsgTypeToJSON } from "../types/types";
import { Proposal as Proposal1 } from "../types/types";
import { Vote as Vote2 } from "../types/types";
import { BitArray } from "../libs/bits/types";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet } from "@osmonauts/helpers";
/**
 * NewRoundStep is sent for every step taken in the ConsensusState.
 * For every height/round/step transition
 */

function createBaseNewRoundStep() {
  return {
    height: Long.ZERO,
    round: 0,
    step: 0,
    secondsSinceStartTime: Long.ZERO,
    lastCommitRound: 0
  };
}

export const NewRoundStep = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }

    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }

    if (message.step !== 0) {
      writer.uint32(24).uint32(message.step);
    }

    if (!message.secondsSinceStartTime.isZero()) {
      writer.uint32(32).int64(message.secondsSinceStartTime);
    }

    if (message.lastCommitRound !== 0) {
      writer.uint32(40).int32(message.lastCommitRound);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewRoundStep();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;

        case 2:
          message.round = reader.int32();
          break;

        case 3:
          message.step = reader.uint32();
          break;

        case 4:
          message.secondsSinceStartTime = reader.int64();
          break;

        case 5:
          message.lastCommitRound = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object) {
    return {
      height: isSet(object.height) ? Long.fromString(object.height) : Long.ZERO,
      round: isSet(object.round) ? Number(object.round) : 0,
      step: isSet(object.step) ? Number(object.step) : 0,
      secondsSinceStartTime: isSet(object.secondsSinceStartTime) ? Long.fromString(object.secondsSinceStartTime) : Long.ZERO,
      lastCommitRound: isSet(object.lastCommitRound) ? Number(object.lastCommitRound) : 0
    };
  },

  toJSON(message) {
    const obj = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.round !== undefined && (obj.round = Math.round(message.round));
    message.step !== undefined && (obj.step = Math.round(message.step));
    message.secondsSinceStartTime !== undefined && (obj.secondsSinceStartTime = (message.secondsSinceStartTime || Long.ZERO).toString());
    message.lastCommitRound !== undefined && (obj.lastCommitRound = Math.round(message.lastCommitRound));
    return obj;
  },

  fromPartial(object) {
    var _object$round, _object$step, _object$lastCommitRou;

    const message = createBaseNewRoundStep();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.round = (_object$round = object.round) !== null && _object$round !== void 0 ? _object$round : 0;
    message.step = (_object$step = object.step) !== null && _object$step !== void 0 ? _object$step : 0;
    message.secondsSinceStartTime = object.secondsSinceStartTime !== undefined && object.secondsSinceStartTime !== null ? Long.fromValue(object.secondsSinceStartTime) : Long.ZERO;
    message.lastCommitRound = (_object$lastCommitRou = object.lastCommitRound) !== null && _object$lastCommitRou !== void 0 ? _object$lastCommitRou : 0;
    return message;
  }

};

function createBaseNewValidBlock() {
  return {
    height: Long.ZERO,
    round: 0,
    blockPartSetHeader: undefined,
    blockParts: undefined,
    isCommit: false
  };
}

export const NewValidBlock = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }

    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }

    if (message.blockPartSetHeader !== undefined) {
      PartSetHeader.encode(message.blockPartSetHeader, writer.uint32(26).fork()).ldelim();
    }

    if (message.blockParts !== undefined) {
      BitArray.encode(message.blockParts, writer.uint32(34).fork()).ldelim();
    }

    if (message.isCommit === true) {
      writer.uint32(40).bool(message.isCommit);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewValidBlock();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;

        case 2:
          message.round = reader.int32();
          break;

        case 3:
          message.blockPartSetHeader = PartSetHeader.decode(reader, reader.uint32());
          break;

        case 4:
          message.blockParts = BitArray.decode(reader, reader.uint32());
          break;

        case 5:
          message.isCommit = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object) {
    return {
      height: isSet(object.height) ? Long.fromString(object.height) : Long.ZERO,
      round: isSet(object.round) ? Number(object.round) : 0,
      blockPartSetHeader: isSet(object.blockPartSetHeader) ? PartSetHeader.fromJSON(object.blockPartSetHeader) : undefined,
      blockParts: isSet(object.blockParts) ? BitArray.fromJSON(object.blockParts) : undefined,
      isCommit: isSet(object.isCommit) ? Boolean(object.isCommit) : false
    };
  },

  toJSON(message) {
    const obj = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.round !== undefined && (obj.round = Math.round(message.round));
    message.blockPartSetHeader !== undefined && (obj.blockPartSetHeader = message.blockPartSetHeader ? PartSetHeader.toJSON(message.blockPartSetHeader) : undefined);
    message.blockParts !== undefined && (obj.blockParts = message.blockParts ? BitArray.toJSON(message.blockParts) : undefined);
    message.isCommit !== undefined && (obj.isCommit = message.isCommit);
    return obj;
  },

  fromPartial(object) {
    var _object$round2, _object$isCommit;

    const message = createBaseNewValidBlock();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.round = (_object$round2 = object.round) !== null && _object$round2 !== void 0 ? _object$round2 : 0;
    message.blockPartSetHeader = object.blockPartSetHeader !== undefined && object.blockPartSetHeader !== null ? PartSetHeader.fromPartial(object.blockPartSetHeader) : undefined;
    message.blockParts = object.blockParts !== undefined && object.blockParts !== null ? BitArray.fromPartial(object.blockParts) : undefined;
    message.isCommit = (_object$isCommit = object.isCommit) !== null && _object$isCommit !== void 0 ? _object$isCommit : false;
    return message;
  }

};

function createBaseProposal() {
  return {
    proposal: undefined
  };
}

export const Proposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.proposal !== undefined) {
      Proposal1.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal1.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object) {
    return {
      proposal: isSet(object.proposal) ? Proposal1.fromJSON(object.proposal) : undefined
    };
  },

  toJSON(message) {
    const obj = {};
    message.proposal !== undefined && (obj.proposal = message.proposal ? Proposal1.toJSON(message.proposal) : undefined);
    return obj;
  },

  fromPartial(object) {
    const message = createBaseProposal();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
    return message;
  }

};

function createBaseProposalPOL() {
  return {
    height: Long.ZERO,
    proposalPolRound: 0,
    proposalPol: undefined
  };
}

export const ProposalPOL = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }

    if (message.proposalPolRound !== 0) {
      writer.uint32(16).int32(message.proposalPolRound);
    }

    if (message.proposalPol !== undefined) {
      BitArray.encode(message.proposalPol, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalPOL();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;

        case 2:
          message.proposalPolRound = reader.int32();
          break;

        case 3:
          message.proposalPol = BitArray.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object) {
    return {
      height: isSet(object.height) ? Long.fromString(object.height) : Long.ZERO,
      proposalPolRound: isSet(object.proposalPolRound) ? Number(object.proposalPolRound) : 0,
      proposalPol: isSet(object.proposalPol) ? BitArray.fromJSON(object.proposalPol) : undefined
    };
  },

  toJSON(message) {
    const obj = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.proposalPolRound !== undefined && (obj.proposalPolRound = Math.round(message.proposalPolRound));
    message.proposalPol !== undefined && (obj.proposalPol = message.proposalPol ? BitArray.toJSON(message.proposalPol) : undefined);
    return obj;
  },

  fromPartial(object) {
    var _object$proposalPolRo;

    const message = createBaseProposalPOL();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.proposalPolRound = (_object$proposalPolRo = object.proposalPolRound) !== null && _object$proposalPolRo !== void 0 ? _object$proposalPolRo : 0;
    message.proposalPol = object.proposalPol !== undefined && object.proposalPol !== null ? BitArray.fromPartial(object.proposalPol) : undefined;
    return message;
  }

};

function createBaseBlockPart() {
  return {
    height: Long.ZERO,
    round: 0,
    part: undefined
  };
}

export const BlockPart = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }

    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }

    if (message.part !== undefined) {
      Part.encode(message.part, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockPart();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;

        case 2:
          message.round = reader.int32();
          break;

        case 3:
          message.part = Part.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object) {
    return {
      height: isSet(object.height) ? Long.fromString(object.height) : Long.ZERO,
      round: isSet(object.round) ? Number(object.round) : 0,
      part: isSet(object.part) ? Part.fromJSON(object.part) : undefined
    };
  },

  toJSON(message) {
    const obj = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.round !== undefined && (obj.round = Math.round(message.round));
    message.part !== undefined && (obj.part = message.part ? Part.toJSON(message.part) : undefined);
    return obj;
  },

  fromPartial(object) {
    var _object$round3;

    const message = createBaseBlockPart();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.round = (_object$round3 = object.round) !== null && _object$round3 !== void 0 ? _object$round3 : 0;
    message.part = object.part !== undefined && object.part !== null ? Part.fromPartial(object.part) : undefined;
    return message;
  }

};

function createBaseVote() {
  return {
    vote: undefined
  };
}

export const Vote = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.vote !== undefined) {
      Vote2.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVote();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.vote = Vote2.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object) {
    return {
      vote: isSet(object.vote) ? Vote2.fromJSON(object.vote) : undefined
    };
  },

  toJSON(message) {
    const obj = {};
    message.vote !== undefined && (obj.vote = message.vote ? Vote2.toJSON(message.vote) : undefined);
    return obj;
  },

  fromPartial(object) {
    const message = createBaseVote();
    message.vote = object.vote !== undefined && object.vote !== null ? Vote.fromPartial(object.vote) : undefined;
    return message;
  }

};

function createBaseHasVote() {
  return {
    height: Long.ZERO,
    round: 0,
    type: 0,
    index: 0
  };
}

export const HasVote = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }

    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }

    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }

    if (message.index !== 0) {
      writer.uint32(32).int32(message.index);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHasVote();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;

        case 2:
          message.round = reader.int32();
          break;

        case 3:
          message.type = reader.int32();
          break;

        case 4:
          message.index = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object) {
    return {
      height: isSet(object.height) ? Long.fromString(object.height) : Long.ZERO,
      round: isSet(object.round) ? Number(object.round) : 0,
      type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : 0,
      index: isSet(object.index) ? Number(object.index) : 0
    };
  },

  toJSON(message) {
    const obj = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.round !== undefined && (obj.round = Math.round(message.round));
    message.type !== undefined && (obj.type = signedMsgTypeToJSON(message.type));
    message.index !== undefined && (obj.index = Math.round(message.index));
    return obj;
  },

  fromPartial(object) {
    var _object$round4, _object$type, _object$index;

    const message = createBaseHasVote();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.round = (_object$round4 = object.round) !== null && _object$round4 !== void 0 ? _object$round4 : 0;
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : 0;
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : 0;
    return message;
  }

};

function createBaseVoteSetMaj23() {
  return {
    height: Long.ZERO,
    round: 0,
    type: 0,
    blockId: undefined
  };
}

export const VoteSetMaj23 = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }

    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }

    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }

    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteSetMaj23();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;

        case 2:
          message.round = reader.int32();
          break;

        case 3:
          message.type = reader.int32();
          break;

        case 4:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object) {
    return {
      height: isSet(object.height) ? Long.fromString(object.height) : Long.ZERO,
      round: isSet(object.round) ? Number(object.round) : 0,
      type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : 0,
      blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : undefined
    };
  },

  toJSON(message) {
    const obj = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.round !== undefined && (obj.round = Math.round(message.round));
    message.type !== undefined && (obj.type = signedMsgTypeToJSON(message.type));
    message.blockId !== undefined && (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
    return obj;
  },

  fromPartial(object) {
    var _object$round5, _object$type2;

    const message = createBaseVoteSetMaj23();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.round = (_object$round5 = object.round) !== null && _object$round5 !== void 0 ? _object$round5 : 0;
    message.type = (_object$type2 = object.type) !== null && _object$type2 !== void 0 ? _object$type2 : 0;
    message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
    return message;
  }

};

function createBaseVoteSetBits() {
  return {
    height: Long.ZERO,
    round: 0,
    type: 0,
    blockId: undefined,
    votes: undefined
  };
}

export const VoteSetBits = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }

    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }

    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }

    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim();
    }

    if (message.votes !== undefined) {
      BitArray.encode(message.votes, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteSetBits();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;

        case 2:
          message.round = reader.int32();
          break;

        case 3:
          message.type = reader.int32();
          break;

        case 4:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;

        case 5:
          message.votes = BitArray.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object) {
    return {
      height: isSet(object.height) ? Long.fromString(object.height) : Long.ZERO,
      round: isSet(object.round) ? Number(object.round) : 0,
      type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : 0,
      blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : undefined,
      votes: isSet(object.votes) ? BitArray.fromJSON(object.votes) : undefined
    };
  },

  toJSON(message) {
    const obj = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.round !== undefined && (obj.round = Math.round(message.round));
    message.type !== undefined && (obj.type = signedMsgTypeToJSON(message.type));
    message.blockId !== undefined && (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
    message.votes !== undefined && (obj.votes = message.votes ? BitArray.toJSON(message.votes) : undefined);
    return obj;
  },

  fromPartial(object) {
    var _object$round6, _object$type3;

    const message = createBaseVoteSetBits();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.round = (_object$round6 = object.round) !== null && _object$round6 !== void 0 ? _object$round6 : 0;
    message.type = (_object$type3 = object.type) !== null && _object$type3 !== void 0 ? _object$type3 : 0;
    message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
    message.votes = object.votes !== undefined && object.votes !== null ? BitArray.fromPartial(object.votes) : undefined;
    return message;
  }

};

function createBaseMessage() {
  return {
    newRoundStep: undefined,
    newValidBlock: undefined,
    proposal: undefined,
    proposalPol: undefined,
    blockPart: undefined,
    vote: undefined,
    hasVote: undefined,
    voteSetMaj23: undefined,
    voteSetBits: undefined
  };
}

export const Message = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.newRoundStep !== undefined) {
      NewRoundStep.encode(message.newRoundStep, writer.uint32(10).fork()).ldelim();
    }

    if (message.newValidBlock !== undefined) {
      NewValidBlock.encode(message.newValidBlock, writer.uint32(18).fork()).ldelim();
    }

    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(26).fork()).ldelim();
    }

    if (message.proposalPol !== undefined) {
      ProposalPOL.encode(message.proposalPol, writer.uint32(34).fork()).ldelim();
    }

    if (message.blockPart !== undefined) {
      BlockPart.encode(message.blockPart, writer.uint32(42).fork()).ldelim();
    }

    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(50).fork()).ldelim();
    }

    if (message.hasVote !== undefined) {
      HasVote.encode(message.hasVote, writer.uint32(58).fork()).ldelim();
    }

    if (message.voteSetMaj23 !== undefined) {
      VoteSetMaj23.encode(message.voteSetMaj23, writer.uint32(66).fork()).ldelim();
    }

    if (message.voteSetBits !== undefined) {
      VoteSetBits.encode(message.voteSetBits, writer.uint32(74).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.newRoundStep = NewRoundStep.decode(reader, reader.uint32());
          break;

        case 2:
          message.newValidBlock = NewValidBlock.decode(reader, reader.uint32());
          break;

        case 3:
          message.proposal = Proposal.decode(reader, reader.uint32());
          break;

        case 4:
          message.proposalPol = ProposalPOL.decode(reader, reader.uint32());
          break;

        case 5:
          message.blockPart = BlockPart.decode(reader, reader.uint32());
          break;

        case 6:
          message.vote = Vote.decode(reader, reader.uint32());
          break;

        case 7:
          message.hasVote = HasVote.decode(reader, reader.uint32());
          break;

        case 8:
          message.voteSetMaj23 = VoteSetMaj23.decode(reader, reader.uint32());
          break;

        case 9:
          message.voteSetBits = VoteSetBits.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object) {
    return {
      newRoundStep: isSet(object.newRoundStep) ? NewRoundStep.fromJSON(object.newRoundStep) : undefined,
      newValidBlock: isSet(object.newValidBlock) ? NewValidBlock.fromJSON(object.newValidBlock) : undefined,
      proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined,
      proposalPol: isSet(object.proposalPol) ? ProposalPOL.fromJSON(object.proposalPol) : undefined,
      blockPart: isSet(object.blockPart) ? BlockPart.fromJSON(object.blockPart) : undefined,
      vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined,
      hasVote: isSet(object.hasVote) ? HasVote.fromJSON(object.hasVote) : undefined,
      voteSetMaj23: isSet(object.voteSetMaj23) ? VoteSetMaj23.fromJSON(object.voteSetMaj23) : undefined,
      voteSetBits: isSet(object.voteSetBits) ? VoteSetBits.fromJSON(object.voteSetBits) : undefined
    };
  },

  toJSON(message) {
    const obj = {};
    message.newRoundStep !== undefined && (obj.newRoundStep = message.newRoundStep ? NewRoundStep.toJSON(message.newRoundStep) : undefined);
    message.newValidBlock !== undefined && (obj.newValidBlock = message.newValidBlock ? NewValidBlock.toJSON(message.newValidBlock) : undefined);
    message.proposal !== undefined && (obj.proposal = message.proposal ? Proposal.toJSON(message.proposal) : undefined);
    message.proposalPol !== undefined && (obj.proposalPol = message.proposalPol ? ProposalPOL.toJSON(message.proposalPol) : undefined);
    message.blockPart !== undefined && (obj.blockPart = message.blockPart ? BlockPart.toJSON(message.blockPart) : undefined);
    message.vote !== undefined && (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
    message.hasVote !== undefined && (obj.hasVote = message.hasVote ? HasVote.toJSON(message.hasVote) : undefined);
    message.voteSetMaj23 !== undefined && (obj.voteSetMaj23 = message.voteSetMaj23 ? VoteSetMaj23.toJSON(message.voteSetMaj23) : undefined);
    message.voteSetBits !== undefined && (obj.voteSetBits = message.voteSetBits ? VoteSetBits.toJSON(message.voteSetBits) : undefined);
    return obj;
  },

  fromPartial(object) {
    const message = createBaseMessage();
    message.newRoundStep = object.newRoundStep !== undefined && object.newRoundStep !== null ? NewRoundStep.fromPartial(object.newRoundStep) : undefined;
    message.newValidBlock = object.newValidBlock !== undefined && object.newValidBlock !== null ? NewValidBlock.fromPartial(object.newValidBlock) : undefined;
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
    message.proposalPol = object.proposalPol !== undefined && object.proposalPol !== null ? ProposalPOL.fromPartial(object.proposalPol) : undefined;
    message.blockPart = object.blockPart !== undefined && object.blockPart !== null ? BlockPart.fromPartial(object.blockPart) : undefined;
    message.vote = object.vote !== undefined && object.vote !== null ? Vote.fromPartial(object.vote) : undefined;
    message.hasVote = object.hasVote !== undefined && object.hasVote !== null ? HasVote.fromPartial(object.hasVote) : undefined;
    message.voteSetMaj23 = object.voteSetMaj23 !== undefined && object.voteSetMaj23 !== null ? VoteSetMaj23.fromPartial(object.voteSetMaj23) : undefined;
    message.voteSetBits = object.voteSetBits !== undefined && object.voteSetBits !== null ? VoteSetBits.fromPartial(object.voteSetBits) : undefined;
    return message;
  }

};