export type campcarProps = {
  name: string;
  cost: string;
  type: string;
  license: string;
  people: string;
  date: string;
  company: string;
  location: string;
  rate: number;
  word: string;
  word1: string;
  word2: string;
  word3: string;
  word4: string;
};

export type MainDataMotor = {
  id: number;
  car: campcarProps;
};

export type CampCar = {
  maindata: MainDataMotor[];
};

export type campcarCaravanProps = {
  name: string;
  cost: string;
  type: string;
  license: string;
  people: string;
  date: string;
  company: string;
  location: string;
  rate: number;
  word: string;
  word1: string;
  word2: string;
  word3: string;
  word4: string;
};

export type MainDataCaravan = {
  id: number;
  car: campcarCaravanProps;
};

export type CampCarCaravan = {
  maindata: MainDataCaravan[];
};

export type campcarTuningProps = {
  name: string;
  cost: string;
  type: string;
  license: string;
  people: string;
  date: string;
  company: string;
  location: string;
  rate: number;
  word: string;
  word1: string;
  word2: string;
  word3: string;
  word4: string;
};
export type MainDataTuning = {
  id: number;
  car: campcarTuningProps;
};

export type CampCarTuning = {
  maindata: MainDataTuning[];
};

export type campcarUsedCarProps = {
  name: string;
  cost: string;
  type: string;
  license: string;
  people: string;
  date: string;
  company: string;
  location: string;
  rate: number;
  word: string;
  word1: string;
  word2: string;
  word3: string;
  word4: string;
};
export type MainDataUsedCar = {
  id: number;
  car: campcarUsedCarProps;
};

export type CampCarUsedCar = {
  maindata: MainDataUsedCar[];
};

export type campcarCampingrProps = {
  name: string;
  cost: string;
  type: string;
  license: string;
  people: string;
  phone: string;
  company: string;
  location: string;
  open: string;
  close: string;
  site: string;
  word: string;
  word1: string;
  word2: string;
  word3: string;
  word4: string;
};
export type MainDataCamping = {
  id: number;
  camping: campcarCampingrProps;
};

export type CampCarCamping = {
  maindata: MainDataCamping[];
};
