/// <reference types="cypress" />

import { navigate, validateProductCBR650R } from "./Page_Objects_Project_Honda.cy";


describe('Getting to Honda Homepage', () => {
    beforeEach(() => {
        navigate()
    });

    it('Should navigate to the Honda Powersports Homepage, then validate the product page (CBR650R) for functionality and validity.', () => {
        validateProductCBR650R()
    });
});