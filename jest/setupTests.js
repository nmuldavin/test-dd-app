import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinonChai from 'sinon-chai';
import URLSearchParams from '@ungap/url-search-params';

chai.use(sinonChai);
chai.use(chaiEnzyme());
chai.should();

window.URLSearchParams = URLSearchParams;
window.expect = expect;

configure({ adapter: new Adapter() });

/**
 * Throw any console errors so that jest catches them
 */
window.console.error = (message) => {
  throw new Error(message);
};
