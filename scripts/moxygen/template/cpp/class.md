---
slug: /{{name}}
title: {{name}}
hide_title: true
displayed_sidebar: unity
---

## {{kind}} `{{name}}` {{anchor refid}}

{{#if basecompoundref}}

```
{{kind}} {{name}}
  {{#each basecompoundref}}
  : {{prot}} {{name}}
  {{/each}}
```

{{/if}}

{{briefdescription}}

{{detaileddescription}}

### Summary

| Members | Type | Descriptions |
| ------- | ---- | ------------ |
{{#each filtered.compounds}}
| {{cell name }} | {{kind}} | {{cell summary}} |
{{/each}}
{{#each filtered.members}}
| {{cell name }} | {{kind}} | {{cell summary}} |
{{/each}}

### Members

{{#each filtered.compounds}}

**{{title proto}}**

{{briefdescription}}

{{detaileddescription}}

{{/each}}

{{#each filtered.members}}

**{{title proto}}**

{{#if enumvalue}}
Values | Descriptions  
--------------------------------|---------------------------------------------
{{#each enumvalue}}
{{cell name}} | {{cell summary}}
{{/each}}
{{/if}}

{{briefdescription}}

{{detaileddescription}}

---

{{/each}}
