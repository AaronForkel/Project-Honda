/// <reference types="cypress" />

import {navigate, validateMainlogo, validateProductselement, validateFindaDealerelement, returnTohomepage, validateOwnersupport} from "./Page_Objects_Project_Honda.cy";


describe('Getting to Honda Homepage', () => {
    beforeEach(() => {
        navigate()
    });

    it('Should navigate to the Honda Powersports Homepage/landing page, then validate various elements', () => {
        validateMainlogo()
        validateProductselement()
        validateFindaDealerelement()
        returnTohomepage()
        validateOwnersupport()
    });
    
  });



