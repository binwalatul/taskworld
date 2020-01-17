module.exports = async(selector, text) => {
  await page.focus(selector);
  await page.keyboard.type(text);
};
