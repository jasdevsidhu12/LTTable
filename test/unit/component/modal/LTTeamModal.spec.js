import LTTeamModal from '_components/modal/LTTeamModal.jsx';
import { shallow } from 'enzyme';

describe('<LTTeamModal />', () => {
    let shWrapper;
    let props;
    beforeEach(() => {
        const closeModalTeamContent = () => {}
        props = {
            closeModalTeamContent: () => {},
            isOpen: false,
            selectedTeam: {},
            teamName: 'Aussie',
            teamLogo: 'url.png'
        }
        shWrapper = shallow(<LTTeamModal {...props} />);
        shWrapperInst = shWrapper.instance();
    });
    it('should contain a div wrapper with the class name "modal-dialog-header"', () => {
        expect(shWrapper.find('.modal-dialog-header').length).toEqual(1);
    });
    it('should call the props functionc "closeTeamModal" when Modal "onHide" function is triggered', ()=>{
        spyOn(shWrapperInst, 'closeTeamModal').and.callThrough();
        shWrapper.props().onHide();
        expect(shWrapperInst.closeTeamModal).toHaveBeenCalled();
    });
    it('should have the team name displayed at the respective component', () => {
        const teamNameDisplayed = ' ' + props.teamName + ' F.C Players';
        expect(shWrapper.find('.modal-dialog-header > ModalHeader > div').text()).toBe(teamNameDisplayed);
    });
    it('should have the team logo displayed at the respective component', () => {
        expect(shWrapper.find('img').props().src).toBe(props.teamLogo);
    });
});