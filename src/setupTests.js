import '@testing-library/jest-dom';

import Enzyme, { EnzymeAdapter } from "enzyme";

Enzyme.configure({ adapter: new EnzymeAdapter() });