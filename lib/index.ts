export enum CHART_TYPES {
  PIE_CHART,
  HORIZONTAL_BAR_CHART,
  STACK_BAR_CHART,
  VERTICAL_BAR_CHART,
  LINE_CHART,
  AREA_CHART,
  DONUT_CHART,
}

export interface ICard {
  id: string;
  data: Array<any>;
  title?: string;
  text?: string;
  type: CHART_TYPES;
}

export const IOT_DASHBOARD_DATA: Array<ICard> = [
  {
    id: "1",
    data: [
      {
        value: 47,
        color: "#009FFF",
        gradientCenterColor: "#006DFF",
        focused: true,
      },
      { value: 3, color: "#FFA5BA", gradientCenterColor: "#FF7F97" },
      { value: 40, color: "#93FCF8", gradientCenterColor: "#3BE9DE" },
      { value: 16, color: "#BDB2FA", gradientCenterColor: "#8F80F3" },
    ],
    type: CHART_TYPES.PIE_CHART,
  },
  {
    id: "2",
    data: [
      { value: 250, label: "M", frontColor: "#357cb5" },
      { value: 250, label: "T" },
      { value: 100, label: "W", frontColor: "#357cb5" },
      { value: 320, label: "T" },
      { value: 100, label: "F", frontColor: "#357cb5" },
      { value: 300, label: "S" },
      { value: 500, label: "F", frontColor: "#357cb5" },
    ],
    title: "CUPS DISPENSED BY DAY PART",
    text: "last 30 days",
    type: CHART_TYPES.VERTICAL_BAR_CHART,
  },
  {
    id: "3",
    data: [
      { value: 0, dataPointText: "0" },
      { value: 20, dataPointText: "20" },
      { value: 18, dataPointText: "18" },
      { value: 40, dataPointText: "40" },
      { value: 36, dataPointText: "36" },
      { value: 60, dataPointText: "60" },
      { value: 54, dataPointText: "54" },
      { value: 85, dataPointText: "85" },
      { value: 18, dataPointText: "18" },
      { value: 40, dataPointText: "40" },
      { value: 36, dataPointText: "36" },
      { value: 60, dataPointText: "60" },
      { value: 54, dataPointText: "54" },
      { value: 85, dataPointText: "85" },
    ],
    title: "ICE CREAM NOVELTY CASE",
    text: "last 30 days",
    type: CHART_TYPES.LINE_CHART,
  },
  {
    id: "4",
    data: [
      {
        stacks: [
          { value: 10, color: "orange" },
          { value: 20, color: "#4ABFF4", marginBottom: 2 },
        ],
        label: "Jan",
      },
      {
        stacks: [
          { value: 10, color: "#4ABFF4" },
          { value: 11, color: "orange", marginBottom: 2 },
          { value: 20, color: "#f43f5e", marginBottom: 2 },
          { value: 15, color: "#28B2B3", marginBottom: 2 },
        ],
        label: "Mar",
      },
      {
        stacks: [
          { value: 14, color: "orange" },
          { value: 18, color: "#4ABFF4", marginBottom: 2 },
        ],
        label: "Feb",
      },
      {
        stacks: [
          { value: 7, color: "#4ABFF4" },
          { value: 11, color: "orange", marginBottom: 2 },
          { value: 10, color: "#28B2B3", marginBottom: 2 },
        ],
        label: "Mar",
      },
      {
        stacks: [
          { value: 7, color: "#4ABFF4" },
          { value: 11, color: "orange", marginBottom: 2 },
          { value: 10, color: "#28B2B3", marginBottom: 2 },
        ],
        label: "Jun",
      },
      {
        stacks: [
          { value: 11, color: "orange", marginBottom: 2 },
          { value: 7, color: "#4ABFF4" },
          { value: 10, color: "#28B2B3", marginBottom: 2 },
        ],
        label: "Mar",
      },
    ],
    title: "CUP BY SIZE",
    text: "last 30 days",
    type: CHART_TYPES.STACK_BAR_CHART,
  },

  {
    id: "5",
    data: [
      {
        value: 47,
        color: "#009FFF",
        gradientCenterColor: "#006DFF",
        focused: true,
      },
      { value: 40, color: "#93FCF8", gradientCenterColor: "#3BE9DE" },
      { value: 16, color: "#BDB2FA", gradientCenterColor: "#8F80F3" },
      { value: 3, color: "#FFA5BA", gradientCenterColor: "#FF7F97" },
    ],
    type: CHART_TYPES.PIE_CHART,
  },
  {
    id: "6",
    data: [
      { value: 250, label: "M", frontColor: "#357cb5" },
      { value: 250, label: "T" },
      { value: 100, label: "W", frontColor: "#357cb5" },
      { value: 320, label: "T" },
      { value: 100, label: "F", frontColor: "#357cb5" },
      { value: 300, label: "S" },
      { value: 500, label: "F", frontColor: "#357cb5" },
    ],
    title: "CUP BY SIZE",
    text: "last 30 days",
    type: CHART_TYPES.VERTICAL_BAR_CHART,
  },
  {
    id: "7",
    data: [
      { value: 0, dataPointText: "0" },
      { value: 20, dataPointText: "20" },
      { value: 18, dataPointText: "18" },
      { value: 40, dataPointText: "40" },
      { value: 36, dataPointText: "36" },
      { value: 60, dataPointText: "60" },
      { value: 54, dataPointText: "54" },
      { value: 85, dataPointText: "85" },
      { value: 18, dataPointText: "18" },
      { value: 40, dataPointText: "40" },
      { value: 36, dataPointText: "36" },
      { value: 60, dataPointText: "60" },
      { value: 54, dataPointText: "54" },
      { value: 85, dataPointText: "85" },
    ],
    title: "CUP BY SIZE",
    text: "last 30 days",
    type: CHART_TYPES.LINE_CHART,
  },
  {
    id: "8",
    data: [
      {
        stacks: [
          { value: 10, color: "orange" },
          { value: 20, color: "#4ABFF4", marginBottom: 2 },
        ],
        label: "Jan",
      },
      {
        stacks: [
          { value: 10, color: "#4ABFF4" },
          { value: 11, color: "orange", marginBottom: 2 },
          { value: 20, color: "#f43f5e", marginBottom: 2 },
          { value: 15, color: "#28B2B3", marginBottom: 2 },
        ],
        label: "Mar",
      },
      {
        stacks: [
          { value: 14, color: "orange" },
          { value: 18, color: "#4ABFF4", marginBottom: 2 },
        ],
        label: "Feb",
      },
      {
        stacks: [
          { value: 7, color: "#4ABFF4" },
          { value: 11, color: "orange", marginBottom: 2 },
          { value: 10, color: "#28B2B3", marginBottom: 2 },
        ],
        label: "Mar",
      },
      {
        stacks: [
          { value: 7, color: "#4ABFF4" },
          { value: 11, color: "orange", marginBottom: 2 },
          { value: 10, color: "#28B2B3", marginBottom: 2 },
        ],
        label: "Jun",
      },
      {
        stacks: [
          { value: 11, color: "orange", marginBottom: 2 },
          { value: 7, color: "#4ABFF4" },
          { value: 10, color: "#28B2B3", marginBottom: 2 },
        ],
        label: "Mar",
      },
    ],
    title: "CUP BY SIZE",
    text: "last 30 days",
    type: CHART_TYPES.STACK_BAR_CHART,
  },
];
