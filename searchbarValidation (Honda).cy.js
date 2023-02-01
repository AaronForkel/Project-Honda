/// <reference types="cypress" />

import { navigate, searchbarValidation } from "./Page_Objects_Personal_Project.cy";


describe('Getting to Honda Homepage', () => {
    beforeEach(() => {
        navigate()
    });

    it('Should open search bar, type "CBR650R", click second result, then validate the product page (CBR650R) for functionality and validity.', () => {
        searchbarValidation()
    });
});