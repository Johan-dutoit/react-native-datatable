# react-native-datatable

A simple data table for react native, working both on Android and iOS.

[![NPM Version](https://img.shields.io/npm/v/react-native-datatable.svg?style=flat)](https://www.npmjs.com/package/react-native-datatable)
[![NPM Downloads](https://img.shields.io/npm/dm/react-native-datatable.svg?style=flat)](https://www.npmjs.com/package/react-native-datatable)

<a name='top'/>

## Quick Access
* <a href='#install'>Installation</a>
* <a href='#preview'>Preview</a>
* <a href='#usage'>Usage</a>
* <a href='#properties'>Properties</a>
* <a href='#contributing'>Contributing</a>

## <a name='install'>Installation</a>
Install the module with:


```
npm install react-native-datatable --save
```

## <a name='preview'>Preview</a>

![](https://github.com/Johan-dutoit/react-native-datatable/blob/master/preview.gif)


## <a name='usage'>Usage</a>
In your code, simply require/import the module:

```js
import DataTable from 'react-native-datatable';
```

###### <a href='#top'>Top</a>

## <a name='properties'>Properties</a>

| Prop | Description | Default |
|---|---|---|
|**`fields`**|Field Configuration|`null`|
|**`onSort`**|Function that executes when the user sorts a column|`null`|
|**`dataSource`**|dataSource used to populate the table|`null`|
|**`containerStyle`**|Style for container wrapping the entire view|`null`|
|**`renderHeaderCell`**|Custom render function for the header cell|`null`|
|**`headerStyle`**|Additional style for the header container|`null`|
|**`headerCellStyle`**|Additional style for the header cell|`null`|
|**`headerHighlightColor`**|Highlight color for when user taps the header|`gray`|
|**`cellStyle`**|Additional style for a cell|`null`|

###### <a href='#top'>Top</a>

## <a name='#Contributing'>Contributing</a>
Feel free to do pull requests if a certain feature you want is missing.  We accept all PR's that are enhancements to the project.

###### <a href='#top'>Top</a>
