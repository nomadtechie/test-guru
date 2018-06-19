var Inbox = {

    /**
     * An array of message objects
     * Example: {id: 1, from: 'Joe Schmoe', subject: 'Hello There', flagged: false}
     */
    messages: [],

    /**
     * Given an array of "selected message ids", decide whether to flag OR unflag them
     *
     * If all selected messages are flagged, unflag them.
     * If none selected messages are flagged, flag them.
     * If any selected messages are not flagged, flag them.
     *
     * @param selectedIds
     * @return {boolean}
     */
    shouldFlag: function(selectedIds) {

        return this.messages
            .filter(message => selectedIds.indexOf(message.id) !== -1)
            .some(message => !message.flagged);

    },


    /**
     * BEFORE refactoring
     */
    oldShouldFlag: function(selectedIds) {
        // Assume don't flag
        var shouldFlagMessages = false;
        // Keep track of how many are flagged and not flagged
        var flaggedCount = 0;
        var unFlaggedCount = 0;

        // Get only the messages we care about
        var messagesInQuestion = [];
        for (var i = 0; i < this.messages.length; i++) {
            if (selectedIds.indexOf(this.messages[i].id) !== -1)
                messagesInQuestion.push(this.messages[i]);
        }

        // Determine the number of flagged messages vs. unflagged messages in the set
        for (var i = 0; i < messagesInQuestion.length; i++) {
            if (messagesInQuestion[i].flagged) {
                flaggedCount++;
            } else {
                unFlaggedCount++;
            }
        }

        // Only flag the messages if there are no flagged messages
        // OR there are messagesInQuestion present that are not flagged
        if (flaggedCount === 0 || unFlaggedCount !== 0)
            shouldFlagMessages = true;

        return shouldFlagMessages;
    }

};


/**
 * Setup data, usages, and verify expected outcomes
 */

Inbox.messages = [
    {
        id: 123,
        from: "John Doe",
        flagged: false,
        subject: "Please Read Me"
    },
    {
        id: 124,
        from: "Mary Jane",
        flagged: true,
        subject: "Not so important..."
    },
    {
        id: 125,
        from: "Bill Bob",
        flagged: false,
        subject: "Spam Content"
    },
    {
        id: 126,
        from: "Josh Josherson",
        flagged: true,
        subject: "RE: Your Request"
    },
    {
        id: 127,
        from: "Kate Katerson",
        flagged: true,
        subject: "Just Checking in"
    }
];

// Pretend these are Jasmine tests ;P
function assertShouldFlag(expectation, selectedIds, description) {
    var result  = Inbox.shouldFlag(selectedIds);
    var message = (result === expectation)
        ? "Pass!"
        : "Failed...";
    console.log(
        description,
        message +
        " Expected " + expectation + " got " + result + " with " +
        JSON.stringify(selectedIds) + "\n"
    );
}

console.clear();
console.log(Math.random());


describe('shouldFlag', () => {

    test('If all selected messages are flagged, unflag them.', () => {
        expect(Inbox.shouldFlag([124, 126])).toBe(false);
    });

    test('If none selected messages are flagged, flag them.', () => {
        expect(Inbox.shouldFlag([123, 125])).toBe(true);
    });

    test('If any selected messages are not flagged, flag them.', () => {
        expect(Inbox.shouldFlag([123, 124, 126, 127])).toBe(true);
    });
});