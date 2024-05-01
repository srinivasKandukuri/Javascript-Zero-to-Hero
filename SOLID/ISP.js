/*

Interface Segregation Principle (ISP):
Clients should not be forced to depend on interfaces they do not use.
While JavaScript does not have explicit interfaces like some other languages, ISP can still be applied by designing modules, classes, or objects to have narrow, focused interfaces.
Using techniques like object composition or providing smaller, specialized interfaces can help adhere to this principle.

*/


// Violating ISP
class Worker {
    work() {
        // Method for general work
    }
    
    takeBreak() {
        // Method for taking a break
    }
    
    attendMeeting() {
        // Method for attending a meeting
    }
}

// Good example following ISP
class Worker {
    work() {
        // Method for general work
    }
}

class BreakTaker {
    takeBreak() {
        // Method for taking a break
    }
}

class MeetingAttendee {
    attendMeeting() {
        // Method for attending a meeting
    }
}
