[zigbee-herdsman](../README.md) › ["src/controller/model/endpoint"](../modules/_src_controller_model_endpoint_.md) › [Endpoint](_src_controller_model_endpoint_.endpoint.md)

# Class: Endpoint

## Hierarchy

* Entity

  ↳ **Endpoint**

## Index

### Properties

* [ID](_src_controller_model_endpoint_.endpoint.md#readonly-id)
* [clusters](_src_controller_model_endpoint_.endpoint.md#readonly-clusters)
* [deviceID](_src_controller_model_endpoint_.endpoint.md#optional-deviceid)
* [deviceNetworkAddress](_src_controller_model_endpoint_.endpoint.md#devicenetworkaddress)
* [inputClusters](_src_controller_model_endpoint_.endpoint.md#inputclusters)
* [outputClusters](_src_controller_model_endpoint_.endpoint.md#outputclusters)
* [profileID](_src_controller_model_endpoint_.endpoint.md#optional-profileid)

### Accessors

* [binds](_src_controller_model_endpoint_.endpoint.md#binds)

### Methods

* [addToGroup](_src_controller_model_endpoint_.endpoint.md#addtogroup)
* [bind](_src_controller_model_endpoint_.endpoint.md#bind)
* [command](_src_controller_model_endpoint_.endpoint.md#command)
* [commandResponse](_src_controller_model_endpoint_.endpoint.md#commandresponse)
* [configureReporting](_src_controller_model_endpoint_.endpoint.md#configurereporting)
* [defaultResponse](_src_controller_model_endpoint_.endpoint.md#defaultresponse)
* [getClusterAttributeValue](_src_controller_model_endpoint_.endpoint.md#getclusterattributevalue)
* [getDevice](_src_controller_model_endpoint_.endpoint.md#getdevice)
* [getInputClusters](_src_controller_model_endpoint_.endpoint.md#getinputclusters)
* [getOutputClusters](_src_controller_model_endpoint_.endpoint.md#getoutputclusters)
* [read](_src_controller_model_endpoint_.endpoint.md#read)
* [readResponse](_src_controller_model_endpoint_.endpoint.md#readresponse)
* [removeFromAllGroups](_src_controller_model_endpoint_.endpoint.md#removefromallgroups)
* [removeFromAllGroupsDatabase](_src_controller_model_endpoint_.endpoint.md#removefromallgroupsdatabase)
* [removeFromGroup](_src_controller_model_endpoint_.endpoint.md#removefromgroup)
* [save](_src_controller_model_endpoint_.endpoint.md#save)
* [saveClusterAttributeKeyValue](_src_controller_model_endpoint_.endpoint.md#saveclusterattributekeyvalue)
* [supportsInputCluster](_src_controller_model_endpoint_.endpoint.md#supportsinputcluster)
* [supportsOutputCluster](_src_controller_model_endpoint_.endpoint.md#supportsoutputcluster)
* [toDatabaseRecord](_src_controller_model_endpoint_.endpoint.md#todatabaserecord)
* [unbind](_src_controller_model_endpoint_.endpoint.md#unbind)
* [waitForCommand](_src_controller_model_endpoint_.endpoint.md#waitforcommand)
* [write](_src_controller_model_endpoint_.endpoint.md#write)
* [create](_src_controller_model_endpoint_.endpoint.md#static-create)
* [fromDatabaseRecord](_src_controller_model_endpoint_.endpoint.md#static-fromdatabaserecord)
* [injectAdapter](_src_controller_model_endpoint_.endpoint.md#static-injectadapter)
* [injectDatabase](_src_controller_model_endpoint_.endpoint.md#static-injectdatabase)

## Properties

### `Readonly` ID

• **ID**: *number*

*Defined in [src/controller/model/endpoint.ts:59](https://github.com/Koenkk/zigbee-herdsman/blob/master/src/src/controller/model/endpoint.ts#L59)*

___

### `Readonly` clusters

• **clusters**: *[Clusters](../interfaces/_src_controller_model_endpoint_.clusters.md)*

*Defined in [src/controller/model/endpoint.ts:60](https://github.com/Koenkk/zigbee-herdsman/blob/master/src/src/controller/model/endpoint.ts#L60)*

___

### `Optional` deviceID

• **deviceID**? : *number*

*Defined in [src/controller/model/endpoint.ts:55](https://github.com/Koenkk/zigbee-herdsman/blob/master/src/src/controller/model/endpoint.ts#L55)*

___

###  deviceNetworkAddress

• **deviceNetworkAddress**: *number*

*Defined in [src/controller/model/endpoint.ts:62](https://github.com/Koenkk/zigbee-herdsman/blob/master/src/src/controller/model/endpoint.ts#L62)*

___

###  inputClusters

• **inputClusters**: *number[]*

*Defined in [src/controller/model/endpoint.ts:56](https://github.com/Koenkk/zigbee-herdsman/blob/master/src/src/controller/model/endpoint.ts#L56)*

___

###  outputClusters

• **outputClusters**: *number[]*

*Defined in [src/controller/model/endpoint.ts:57](https://github.com/Koenkk/zigbee-herdsman/blob/master/src/src/controller/model/endpoint.ts#L57)*

___

### `Optional` profileID

• **profileID**? : *number*

*Defined in [src/controller/model/endpoint.ts:58](https://github.com/Koenkk/zigbee-herdsman/blob/master/src/src/controller/model/endpoint.ts#L58)*

## Accessors

###  binds

• **get binds**(): *[Bind](../interfaces/_src_controller_model_endpoint_.bind.md)[]*

*Defined in [src/controller/model/endpoint.ts:67](https://github.com/Koenkk/zigbee-herdsman/blob/master/src/src/controller/model/endpoint.ts#L67)*

**Returns:** *[Bind](../interfaces/_src_controller_model_endpoint_.bind.md)[]*

## Methods

###  addToGroup

▸ **addToGroup**(`group`: [Group](_src_controller_model_group_.group.md)): *Promise‹void›*

*Defined in [src/controller/model/endpoint.ts:602](https://github.com/Koenkk/zigbee-herdsman/blob/master/src/src/controller/model/endpoint.ts#L602)*

**Parameters:**

Name | Type |
------ | ------ |
`group` | [Group](_src_controller_model_group_.group.md) |

**Returns:** *Promise‹void›*

___

###  bind

▸ **bind**(`clusterKey`: number | string, `target`: [Endpoint](_src_controller_model_endpoint_.endpoint.md) | [Group](_src_controller_model_group_.group.md) | number): *Promise‹void›*

*Defined in [src/controller/model/endpoint.ts:347](https://github.com/Koenkk/zigbee-herdsman/blob/master/src/src/controller/model/endpoint.ts#L347)*

**Parameters:**

Name | Type |
------ | ------ |
`clusterKey` | number &#124; string |
`target` | [Endpoint](_src_controller_model_endpoint_.endpoint.md) &#124; [Group](_src_controller_model_group_.group.md) &#124; number |

**Returns:** *Promise‹void›*

___

###  command

▸ **command**(`clusterKey`: number | string, `commandKey`: number | string, `payload`: [KeyValue](../interfaces/_src_controller_tstype_.keyvalue.md), `options?`: [Options](../interfaces/_src_controller_model_group_.options.md)): *Promise‹void | [KeyValue](../interfaces/_src_controller_tstype_.keyvalue.md)›*

*Defined in [src/controller/model/endpoint.ts:499](https://github.com/Koenkk/zigbee-herdsman/blob/master/src/src/controller/model/endpoint.ts#L499)*

**Parameters:**

Name | Type |
------ | ------ |
`clusterKey` | number &#124; string |
`commandKey` | number &#124; string |
`payload` | [KeyValue](../interfaces/_src_controller_tstype_.keyvalue.md) |
`options?` | [Options](../interfaces/_src_controller_model_group_.options.md) |

**Returns:** *Promise‹void | [KeyValue](../interfaces/_src_controller_tstype_.keyvalue.md)›*

___

###  commandResponse

▸ **commandResponse**(`clusterKey`: number | string, `commandKey`: number | string, `payload`: [KeyValue](../interfaces/_src_controller_tstype_.keyvalue.md), `options?`: [Options](../interfaces/_src_controller_model_group_.options.md), `transactionSequenceNumber?`: number): *Promise‹void | [KeyValue](../interfaces/_src_controller_tstype_.keyvalue.md)›*

*Defined in [src/controller/model/endpoint.ts:533](https://github.com/Koenkk/zigbee-herdsman/blob/master/src/src/controller/model/endpoint.ts#L533)*

**Parameters:**

Name | Type |
------ | ------ |
`clusterKey` | number &#124; string |
`commandKey` | number &#124; string |
`payload` | [KeyValue](../interfaces/_src_controller_tstype_.keyvalue.md) |
`options?` | [Options](../interfaces/_src_controller_model_group_.options.md) |
`transactionSequenceNumber?` | number |

**Returns:** *Promise‹void | [KeyValue](../interfaces/_src_controller_tstype_.keyvalue.md)›*

___

###  configureReporting

▸ **configureReporting**(`clusterKey`: number | string, `items`: [ConfigureReportingItem](../interfaces/_src_controller_model_endpoint_.configurereportingitem.md)[], `options?`: [Options](../interfaces/_src_controller_model_group_.options.md)): *Promise‹void›*

*Defined in [src/controller/model/endpoint.ts:444](https://github.com/Koenkk/zigbee-herdsman/blob/master/src/src/controller/model/endpoint.ts#L444)*

**Parameters:**

Name | Type |
------ | ------ |
`clusterKey` | number &#124; string |
`items` | [ConfigureReportingItem](../interfaces/_src_controller_model_endpoint_.configurereportingitem.md)[] |
`options?` | [Options](../interfaces/_src_controller_model_group_.options.md) |

**Returns:** *Promise‹void›*

___

###  defaultResponse

▸ **defaultResponse**(`commandID`: number, `status`: number, `clusterID`: number, `transactionSequenceNumber`: number, `options?`: [Options](../interfaces/_src_controller_model_group_.options.md)): *Promise‹void›*

*Defined in [src/controller/model/endpoint.ts:417](https://github.com/Koenkk/zigbee-herdsman/blob/master/src/src/controller/model/endpoint.ts#L417)*

**Parameters:**

Name | Type |
------ | ------ |
`commandID` | number |
`status` | number |
`clusterID` | number |
`transactionSequenceNumber` | number |
`options?` | [Options](../interfaces/_src_controller_model_group_.options.md) |

**Returns:** *Promise‹void›*

___

###  getClusterAttributeValue

▸ **getClusterAttributeValue**(`clusterKey`: number | string, `attributeKey`: number | string): *number | string*

*Defined in [src/controller/model/endpoint.ts:205](https://github.com/Koenkk/zigbee-herdsman/blob/master/src/src/controller/model/endpoint.ts#L205)*

**Parameters:**

Name | Type |
------ | ------ |
`clusterKey` | number &#124; string |
`attributeKey` | number &#124; string |

**Returns:** *number | string*

___

###  getDevice

▸ **getDevice**(): *[Device](_src_controller_model_device_.device.md)*

*Defined in [src/controller/model/endpoint.ts:108](https://github.com/Koenkk/zigbee-herdsman/blob/master/src/src/controller/model/endpoint.ts#L108)*

Get device of this endpoint

**Returns:** *[Device](_src_controller_model_device_.device.md)*

___

###  getInputClusters

▸ **getInputClusters**(): *Cluster[]*

*Defined in [src/controller/model/endpoint.ts:133](https://github.com/Koenkk/zigbee-herdsman/blob/master/src/src/controller/model/endpoint.ts#L133)*

**Returns:** *Cluster[]*

___

###  getOutputClusters

▸ **getOutputClusters**(): *Cluster[]*

*Defined in [src/controller/model/endpoint.ts:140](https://github.com/Koenkk/zigbee-herdsman/blob/master/src/src/controller/model/endpoint.ts#L140)*

**Returns:** *Cluster[]*

___

###  read

▸ **read**(`clusterKey`: number | string, `attributes`: string[] | number[], `options?`: [Options](../interfaces/_src_controller_model_group_.options.md)): *Promise‹[KeyValue](../interfaces/_src_controller_tstype_.keyvalue.md)›*

*Defined in [src/controller/model/endpoint.ts:269](https://github.com/Koenkk/zigbee-herdsman/blob/master/src/src/controller/model/endpoint.ts#L269)*

**Parameters:**

Name | Type |
------ | ------ |
`clusterKey` | number &#124; string |
`attributes` | string[] &#124; number[] |
`options?` | [Options](../interfaces/_src_controller_model_group_.options.md) |

**Returns:** *Promise‹[KeyValue](../interfaces/_src_controller_tstype_.keyvalue.md)›*

___

###  readResponse

▸ **readResponse**(`clusterKey`: number | string, `transactionSequenceNumber`: number, `attributes`: [KeyValue](../interfaces/_src_controller_tstype_.keyvalue.md), `options?`: [Options](../interfaces/_src_controller_model_group_.options.md)): *Promise‹void›*

*Defined in [src/controller/model/endpoint.ts:308](https://github.com/Koenkk/zigbee-herdsman/blob/master/src/src/controller/model/endpoint.ts#L308)*

**Parameters:**

Name | Type |
------ | ------ |
`clusterKey` | number &#124; string |
`transactionSequenceNumber` | number |
`attributes` | [KeyValue](../interfaces/_src_controller_tstype_.keyvalue.md) |
`options?` | [Options](../interfaces/_src_controller_model_group_.options.md) |

**Returns:** *Promise‹void›*

___

###  removeFromAllGroups

▸ **removeFromAllGroups**(): *Promise‹void›*

*Defined in [src/controller/model/endpoint.ts:619](https://github.com/Koenkk/zigbee-herdsman/blob/master/src/src/controller/model/endpoint.ts#L619)*

**Returns:** *Promise‹void›*

___

###  removeFromAllGroupsDatabase

▸ **removeFromAllGroupsDatabase**(): *void*

*Defined in [src/controller/model/endpoint.ts:624](https://github.com/Koenkk/zigbee-herdsman/blob/master/src/src/controller/model/endpoint.ts#L624)*

**Returns:** *void*

___

###  removeFromGroup

▸ **removeFromGroup**(`group`: [Group](_src_controller_model_group_.group.md) | number): *Promise‹void›*

*Defined in [src/controller/model/endpoint.ts:612](https://github.com/Koenkk/zigbee-herdsman/blob/master/src/src/controller/model/endpoint.ts#L612)*

Remove endpoint from a group, accepts both a Group and number as parameter.
The number parameter type should only be used when removing from a group which is not known
to zigbee-herdsman.

**Parameters:**

Name | Type |
------ | ------ |
`group` | [Group](_src_controller_model_group_.group.md) &#124; number |

**Returns:** *Promise‹void›*

___

###  save

▸ **save**(): *void*

*Defined in [src/controller/model/endpoint.ts:384](https://github.com/Koenkk/zigbee-herdsman/blob/master/src/src/controller/model/endpoint.ts#L384)*

**Returns:** *void*

___

###  saveClusterAttributeKeyValue

▸ **saveClusterAttributeKeyValue**(`clusterKey`: number | string, `list`: [KeyValue](../interfaces/_src_controller_tstype_.keyvalue.md)): *void*

*Defined in [src/controller/model/endpoint.ts:196](https://github.com/Koenkk/zigbee-herdsman/blob/master/src/src/controller/model/endpoint.ts#L196)*

**Parameters:**

Name | Type |
------ | ------ |
`clusterKey` | number &#124; string |
`list` | [KeyValue](../interfaces/_src_controller_tstype_.keyvalue.md) |

**Returns:** *void*

___

###  supportsInputCluster

▸ **supportsInputCluster**(`clusterKey`: number | string): *boolean*

*Defined in [src/controller/model/endpoint.ts:116](https://github.com/Koenkk/zigbee-herdsman/blob/master/src/src/controller/model/endpoint.ts#L116)*

**Parameters:**

Name | Type |
------ | ------ |
`clusterKey` | number &#124; string |

**Returns:** *boolean*

___

###  supportsOutputCluster

▸ **supportsOutputCluster**(`clusterKey`: number | string): *boolean*

*Defined in [src/controller/model/endpoint.ts:125](https://github.com/Koenkk/zigbee-herdsman/blob/master/src/src/controller/model/endpoint.ts#L125)*

**Parameters:**

Name | Type |
------ | ------ |
`clusterKey` | number &#124; string |

**Returns:** *boolean*

___

###  toDatabaseRecord

▸ **toDatabaseRecord**(): *[KeyValue](../interfaces/_src_controller_tstype_.keyvalue.md)*

*Defined in [src/controller/model/endpoint.ts:178](https://github.com/Koenkk/zigbee-herdsman/blob/master/src/src/controller/model/endpoint.ts#L178)*

**Returns:** *[KeyValue](../interfaces/_src_controller_tstype_.keyvalue.md)*

___

###  unbind

▸ **unbind**(`clusterKey`: number | string, `target`: [Endpoint](_src_controller_model_endpoint_.endpoint.md) | [Group](_src_controller_model_group_.group.md) | number): *Promise‹void›*

*Defined in [src/controller/model/endpoint.ts:388](https://github.com/Koenkk/zigbee-herdsman/blob/master/src/src/controller/model/endpoint.ts#L388)*

**Parameters:**

Name | Type |
------ | ------ |
`clusterKey` | number &#124; string |
`target` | [Endpoint](_src_controller_model_endpoint_.endpoint.md) &#124; [Group](_src_controller_model_group_.group.md) &#124; number |

**Returns:** *Promise‹void›*

___

###  waitForCommand

▸ **waitForCommand**(`clusterKey`: number | string, `commandKey`: number | string, `transactionSequenceNumber`: number, `timeout`: number): *object*

*Defined in [src/controller/model/endpoint.ts:564](https://github.com/Koenkk/zigbee-herdsman/blob/master/src/src/controller/model/endpoint.ts#L564)*

**Parameters:**

Name | Type |
------ | ------ |
`clusterKey` | number &#124; string |
`commandKey` | number &#124; string |
`transactionSequenceNumber` | number |
`timeout` | number |

**Returns:** *object*

* **cancel**(): *function*

  * (): *void*

* **promise**: *Promise‹object›*

___

###  write

▸ **write**(`clusterKey`: number | string, `attributes`: [KeyValue](../interfaces/_src_controller_tstype_.keyvalue.md), `options?`: [Options](../interfaces/_src_controller_model_group_.options.md)): *Promise‹void›*

*Defined in [src/controller/model/endpoint.ts:227](https://github.com/Koenkk/zigbee-herdsman/blob/master/src/src/controller/model/endpoint.ts#L227)*

**Parameters:**

Name | Type |
------ | ------ |
`clusterKey` | number &#124; string |
`attributes` | [KeyValue](../interfaces/_src_controller_tstype_.keyvalue.md) |
`options?` | [Options](../interfaces/_src_controller_model_group_.options.md) |

**Returns:** *Promise‹void›*

___

### `Static` create

▸ **create**(`ID`: number, `profileID`: number, `deviceID`: number, `inputClusters`: number[], `outputClusters`: number[], `deviceNetworkAddress`: number, `deviceIeeeAddress`: string): *[Endpoint](_src_controller_model_endpoint_.endpoint.md)*

*Defined in [src/controller/model/endpoint.ts:186](https://github.com/Koenkk/zigbee-herdsman/blob/master/src/src/controller/model/endpoint.ts#L186)*

**Parameters:**

Name | Type |
------ | ------ |
`ID` | number |
`profileID` | number |
`deviceID` | number |
`inputClusters` | number[] |
`outputClusters` | number[] |
`deviceNetworkAddress` | number |
`deviceIeeeAddress` | string |

**Returns:** *[Endpoint](_src_controller_model_endpoint_.endpoint.md)*

___

### `Static` fromDatabaseRecord

▸ **fromDatabaseRecord**(`record`: [KeyValue](../interfaces/_src_controller_tstype_.keyvalue.md), `deviceNetworkAddress`: number, `deviceIeeeAddress`: string): *[Endpoint](_src_controller_model_endpoint_.endpoint.md)*

*Defined in [src/controller/model/endpoint.ts:158](https://github.com/Koenkk/zigbee-herdsman/blob/master/src/src/controller/model/endpoint.ts#L158)*

**Parameters:**

Name | Type |
------ | ------ |
`record` | [KeyValue](../interfaces/_src_controller_tstype_.keyvalue.md) |
`deviceNetworkAddress` | number |
`deviceIeeeAddress` | string |

**Returns:** *[Endpoint](_src_controller_model_endpoint_.endpoint.md)*

___

### `Static` injectAdapter

▸ **injectAdapter**(`adapter`: Adapter): *void*

*Inherited from [Group](_src_controller_model_group_.group.md).[injectAdapter](_src_controller_model_group_.group.md#static-injectadapter)*

*Defined in [src/controller/model/entity.ts:12](https://github.com/Koenkk/zigbee-herdsman/blob/master/src/src/controller/model/entity.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`adapter` | Adapter |

**Returns:** *void*

___

### `Static` injectDatabase

▸ **injectDatabase**(`database`: Database): *void*

*Inherited from [Group](_src_controller_model_group_.group.md).[injectDatabase](_src_controller_model_group_.group.md#static-injectdatabase)*

*Defined in [src/controller/model/entity.ts:8](https://github.com/Koenkk/zigbee-herdsman/blob/master/src/src/controller/model/entity.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`database` | Database |

**Returns:** *void*
