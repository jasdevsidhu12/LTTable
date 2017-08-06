import LTTeamModal from '_components/modal/LTTeamModal.jsx';
import { shallow } from 'enzyme';

describe('<LTTeamModal />', () => {
    let shWrapper;

    beforeEach(() => {
        const closeModalTeamContent = () => {}
        const props = {
            closeModalTeamContent: () => {},
            isOpen: false,
            selectedTeam: {},
            teamName: 'Aussie',
            teamLogo: 'url.png'
        }
        shWrapper = shallow(<LTTeamModal {...props} />);
        shWrapperInst = shWrapper.instance();
    });
    it('test one', () => {
        console.log(shWrapper.debug());
        expect(shWrapper.find('.modal-dialog-header').length).toEqual(1, 'exactly equal one');
    });
    it('test two', ()=>{
        console.log(shWrapperInst);
        spyOn(shWrapperInst, 'closeTeamModal').and.callThrough();
        shWrapper.props().onHide();
        expect(shWrapperInst.closeTeamModal).toHaveBeenCalled();
    });
    
});