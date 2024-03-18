# CSS Variable Playground using JavaScript

## My take on a Wes Bos JS tutorial

This is my take on one of Wes Bos' ["JavaScript30"][JavaScript30] tutorials.  I made a few simple changes in order to give the project my own flair - including rearranging the organization of the files and the code within them, making the HTML semantic with the inclusion of HTML5 tags, and adding version control with meaningful commits to the project.

### Organized Code and Files

The first thing I did when I copied this project into my local development environment was split the code up into three different files: index.html, style.css, and app.js.  Again, I understand that for the purpose of Bos's tutorial he wasn't trying to make things overcomplicated, but the perfectionist in me couldn't bear to see all the JavaScript and CSS jumbled together in one file.  Seperating CSS, HTML, and JavaScript brings numerous benefits, from organization, readability, and maintainability to reusability and consistency.  Even further than that - I believe it's still essential that we keep CSS and HTML separate from each other. Although with modern frameworks like React mixing HTML and JavaScript with CSS more and more these days, some devs are questioning if this principle is out of touch. I would argue that CSS, at least, still [needs to be separated from HTML and JavaScript][Against CSS in JS].  Decoupling the style from the logic of your web applications is essential to being efficient. If you are following CSS best practices, updating your HTML shouldn't cause you to have to go in and change your stylesheet every time.  That's because your CSS and HTML should be decoupled. For more information, check out [Scalable Modular Architecture CSS][SMACSS], [Object Oriented CSS][OOCSS], or [Block Element Modifier][BEM].  

### Semantic HTML

The HTML was originally just enough to make the project function correctly. Since the purpose of this tutorial is simply to explore JavaScript basics, it makes since that Bos doesn't want to overcomplicate the learner by trying to introduce a million different concepts, including usability and accessibility. However, since I want to stay in the habit of creating work as I will in the future, I couldn't help but take the HTML and quickly adjust the tags. I wanted to ensure that the DOM was properly structured in a way that was semantically accurate and described the page in a way that would be meaningful to _all_ users - not just ones with the ability to see the page visually.  So, I added `<header></header>`, `<main></main>`, and `<figure></figure>` tags where I felt they were warranted and replaced a `<div></div>` with a `<section></section>` tag in one section. I also entered `<h1><span class="h2">CSS</span></h1>` when the page's title was inaccurately tagged with an `<h2>` tag for styling purposes when HTML tags shouldn't be determined in order to give an element a specific look.  One last thing I want to add is that when I say "semantic HTML" I am _not_ referring to semantic  _class names_! Class names are the one part of HTML that don't have anything to do with the structure or meaning of your content.  They are the part of the HTML that act as "hooks" into your JavaScript logic or your CSS stylesheet.  HTML classes need be meaningful for you, the developer, not the user.

### Meaningful Version Control

Finally, the last thing I added was meaningful version control in the form of [Conventional Commits][Commit Message Format Guidelines].  Specifically, I am following commit message guidelines [standardized by the Angular team][Angular commit guidelines].

My commits must follow the following format:

```text
<type>(optional scope): <description>

[optional body]

[optional footer(s)]

```

For example:

```text
doc(README): Include installation instructions

Added package installation instructions for the user.

Signed-off-by: <contact@bethanyfannin.com>

```
git
[JavaScript30]: https://javascript30.com/
[Against CSS in JS]: https://keithjgrant.com/posts/2015/05/against-css-in-js/
[SMACSS]: http://smacss.com/book/
[OOCSS]: https://github.com/stubbornella/oocss/wiki
[BEM]: http://bem.github.com/bem-method/pages/beginning/beginning.en.html
[Commit Message Format Guidelines]: https://www.conventionalcommits.org/en/v1.0.0/#summary
[Angular Commit Guidelines]: https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines