type TestThing = {
    Run: () => void;
}
export const MyTestThing: TestThing = {
    Run: () => console.log("Test")
}
MyTestThing.Run();