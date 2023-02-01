/// <reference types="cypress" />

import { navigate, validateRidereducation } from "./Page_Objects_Personal_Project.cy";


describe('Getting to Honda Homepage', () => {
    beforeEach(() => {
        navigate()
    });

    it('Should navigate to the Honda Powersports Homepage, then validate the recalls page for functionality', () => {
        validateRidereducation()
    });
});