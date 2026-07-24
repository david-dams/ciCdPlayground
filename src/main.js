import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "David Dams",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
      associations: ["Continuous Integration / Deployment ;)"],
      // Which CI/CD tools do you use in your project?
      tools: "tekton",
    // What do you want to learn in this workshop?
      expectations: ["learn more about jenkins / ci/cd philosophy in general"],
  },
});
