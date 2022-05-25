const customTheme = {
  palette: {
    activeText: "#rgba(255,255,255,0.9)",
    defaultText: "##AEAEB2",
    inactiveText: "#1a1a1a",
    activeBackground: "#1b2129",
    defaultBackground: "#0f1318",
    inputBackground: "#2e2e2e",
    accent: "#90e86f",
    errorBackground: "#dac1fb",
    errorForeground: "#b08df8",
  },
  syntax: {
    plain: "#f0fdaf",
    comment: { color: "#757575", fontStyle: "italic" },
    keyword: "#e5fd78",
    tag: "#f0fdaf",
    punctuation: "#ffffff",
    definition: "#eeeeee",
    property: "#90e86f",
    static: "#ffffff",
    string: "#dafecf",
  },
  typography: {
    bodyFont:
      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    monoFont:
      '"Fira Code", "Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
    fontSize: "14px",
    lineHeight: "1.6",
  },
};

module.exports = customTheme;
