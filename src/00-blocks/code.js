// **Only 1 test case (in a nameless test suite)**
it('birds should fly', () => {
    /** here.should.be.tested
     * However, as long as no error within a it(),
     * it() is considered PASSED */
});

// **Only 1 test case, but nested 3-level deep**

// describe() are:
// - commonly known as test suites, which contains test cases
// - merely groups, and you can have groups within groups
describe('galaxy', () => {
    describe('earth', () => {
        describe('raven', () => {
            it('birds should fly', () => { /** ... */ })
        })
    })
})


// **2 test cases in 1 test suite**

// A common scenario.
describe('raven', () => {
    it('birds should fly', () => { /** ... */ })
    it('horse should gallop', () => { /** ... */ })
});


// **Run once before the first test case**
describe('singapre', () => {
    before(() => {
        console.log('see.. this  i => s run ONCE only')
    });

    it('birds should fly', () => { /** ... */ });
    it('horse should gallop', () => { /** ... */ });
});


// **Run once before each test case**
describe('singapre', () => {
    beforeEach(() => {
        console.log('see.. this  i => s run EACH time')
    });

    it('birds should fly', () => { /** ... */ })
    it('horse should gallop', () => { /** ... */ })
})

// **2 test suites in a big test suite**

// A common scenario.
describe('earth', () => {
    describe('singapre', () => {
        it('birds should fly', () => { /** ... */ })
    });
    describe('malaysia', () => {
        it('birds should soar', () => { /** ... */ })
    });
});


// **before() can be applied to describe() too**
describe('earth', () => {
    before(() => {
        console.log('see.. this  i => s run ONCE only, before first describe()')
    });
    describe('singapre', () => {
        it('birds should fly', () => { /** ... */ })
    });
    describe('malaysia', () => {
        it('birds should soar', () => { /** ... */ })
    });
});


// **beforeEach() can be applied to describe() too**
describe('earth', () => {

    beforeEach(() => {
        console.log('see.. this  i => s run EACH time, before each describe()')
    });

    afterEach(() => {

    });

    describe('singapre', () => {
        it('birds should fly', () => { /** ... */
        })
    });
    describe('malaysia', () => {
        it('birds should soar', () => { /** ... */
        })
    });
});