/// <reference types="cypress" />

import { navigate, validateRecallinfo } from "./Page_Objects_Project_Honda.cy";


describe('Getting to Honda Homepage', () => {
    beforeEach(() => {
        navigate()
    });

    it('Should navigate to the Honda Powersports Homepage, then validate the recalls page for functionality', () => {
        validateRecallinfo()
    });
});