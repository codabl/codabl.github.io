---
last_modified_on: "2020-04-11"
component_title: "Swimlanes"
description: "The Vector `swimlanes` transform accepts and outputs `log` events allowing you to route events across parallel streams using logical filters."
event_types: ["log"]
function_category: "route"
issues_url: https://github.com/timberio/vector/issues?q=is%3Aopen+is%3Aissue+label%3A%22transform%3A+swimlanes%22
sidebar_label: "swimlanes|[\"log\"]"
source_url: https://github.com/timberio/vector/tree/master/src/transforms/swimlanes.rs
status: "beta"
title: "Swimlanes Transform"
---

import Fields from '@site/src/components/Fields';
import Field from '@site/src/components/Field';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Vector `swimlanes` transform
accepts and outputs [`log`][docs.data-model.log] events allowing you to route
events across parallel streams using logical filters.

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the template located at:

     website/docs/reference/transforms/swimlanes.md.erb
-->

## Configuration

<Tabs
  block={true}
  defaultValue="common"
  values={[{"label":"Common","value":"common"},{"label":"Advanced","value":"advanced"}]}>
<TabItem value="common">

```toml title="vector.toml"
[transforms.my_transform_id]
  # General
  type = "swimlanes" # required
  inputs = ["my-source-id"] # required

  # Lanes
  [transforms.my_transform_id.lanes.`[swimlane-id]`]
    type = "check_fields" # optional, default
    "message.eq" = "this is the content to match against" # example
    "message.contains" = "foo" # example
    "environment.ends_with" = "-staging" # example
    "message.regex" = " (any|of|these|five|words) " # example
    "environment.starts_with" = "staging-" # example
```

</TabItem>
<TabItem value="advanced">

```toml title="vector.toml"
[transforms.my_transform_id]
  # General
  type = "swimlanes" # required
  inputs = ["my-source-id"] # required

  # Lanes
  [transforms.my_transform_id.lanes.`[swimlane-id]`]
    type = "check_fields" # optional, default
    "message.eq" = "this is the content to match against" # example
    "host.exists" = true # example
    "method.neq" = "POST" # example
    "message.contains" = "foo" # example
    "environment.ends_with" = "-staging" # example
    "message.regex" = " (any|of|these|five|words) " # example
    "environment.starts_with" = "staging-" # example
```

</TabItem>
</Tabs>

<Fields filters={true}>
<Field
  common={true}
  defaultValue={null}
  enumValues={null}
  examples={[]}
  groups={[]}
  name={"lanes"}
  path={null}
  relevantWhen={null}
  required={true}
  templateable={false}
  type={"table"}
  unit={null}
  warnings={[]}
  >

### lanes

A table of swimlane identifiers to logical conditions representing the filter
of the swimlane. Each swimlane can then be referenced as an input by other
components with the name `<transform_name>.<swimlane_id>`.



<Fields filters={false}>
<Field
  common={true}
  defaultValue={null}
  enumValues={null}
  examples={[]}
  groups={[]}
  name={"`[swimlane-id]`"}
  path={"lanes"}
  relevantWhen={null}
  required={true}
  templateable={false}
  type={"table"}
  unit={null}
  warnings={[]}
  >

#### `[swimlane-id]`

The identifier of a swimlane.



<Fields filters={false}>
<Field
  common={true}
  defaultValue={"check_fields"}
  enumValues={{"check_fields":"Allows you to check individual fields against a list of conditions.","is_log":"Returns true if the event is a log.","is_metric":"Returns true if the event is a metric."}}
  examples={["check_fields","is_log","is_metric"]}
  groups={[]}
  name={"type"}
  path={"lanes.`[swimlane-id]`"}
  relevantWhen={null}
  required={false}
  templateable={false}
  type={"string"}
  unit={null}
  warnings={[]}
  >

##### type

The type of the condition to execute.




</Field>
<Field
  common={true}
  defaultValue={null}
  enumValues={null}
  examples={[{"message.eq":"this is the content to match against"}]}
  groups={[]}
  name={"`[field-name]`.eq"}
  path={"lanes.`[swimlane-id]`"}
  relevantWhen={{"type":"check_fields"}}
  required={false}
  templateable={false}
  type={"string"}
  unit={null}
  warnings={[]}
  >

##### `[field-name]`.eq

Check whether a fields contents exactly matches the value specified.




</Field>
<Field
  common={false}
  defaultValue={null}
  enumValues={null}
  examples={[{"host.exists":true}]}
  groups={[]}
  name={"`[field-name]`.exists"}
  path={"lanes.`[swimlane-id]`"}
  relevantWhen={{"type":"check_fields"}}
  required={false}
  templateable={false}
  type={"bool"}
  unit={null}
  warnings={[]}
  >

##### `[field-name]`.exists

Check whether a field exists or does not exist, depending on the provided value
being `true` or `false` respectively.




</Field>
<Field
  common={false}
  defaultValue={null}
  enumValues={null}
  examples={[{"method.neq":"POST"}]}
  groups={[]}
  name={"`[field-name]`.neq"}
  path={"lanes.`[swimlane-id]`"}
  relevantWhen={{"type":"check_fields"}}
  required={false}
  templateable={false}
  type={"string"}
  unit={null}
  warnings={[]}
  >

##### `[field-name]`.neq

Check whether a fields contents does not match the value specified.




</Field>
<Field
  common={true}
  defaultValue={null}
  enumValues={null}
  examples={[{"message.contains":"foo"}]}
  groups={[]}
  name={"`[field_name]`.contains"}
  path={"lanes.`[swimlane-id]`"}
  relevantWhen={{"type":"check_fields"}}
  required={false}
  templateable={false}
  type={"string"}
  unit={null}
  warnings={[]}
  >

##### `[field_name]`.contains

Checks whether a string field contains a string argument.




</Field>
<Field
  common={true}
  defaultValue={null}
  enumValues={null}
  examples={[{"environment.ends_with":"-staging"}]}
  groups={[]}
  name={"`[field_name]`.ends_with"}
  path={"lanes.`[swimlane-id]`"}
  relevantWhen={{"type":"check_fields"}}
  required={false}
  templateable={false}
  type={"string"}
  unit={null}
  warnings={[]}
  >

##### `[field_name]`.ends_with

Checks whether a string field ends with a string argument.




</Field>
<Field
  common={true}
  defaultValue={null}
  enumValues={null}
  examples={[{"message.regex":" (any|of|these|five|words) "}]}
  groups={[]}
  name={"`[field_name]`.regex"}
  path={"lanes.`[swimlane-id]`"}
  relevantWhen={{"type":"check_fields"}}
  required={false}
  templateable={false}
  type={"string"}
  unit={null}
  warnings={[]}
  >

##### `[field_name]`.regex

Checks whether a string field matches a [regular expression][urls.regex].
Vector uses the [documented Rust Regex syntax][urls.rust_regex_syntax]. Note
that this condition is considerably more expensive than a regular string match
(such as `starts_with` or `contains`) so the use of those conditions are
preferred where possible.




</Field>
<Field
  common={true}
  defaultValue={null}
  enumValues={null}
  examples={[{"environment.starts_with":"staging-"}]}
  groups={[]}
  name={"`[field_name]`.starts_with"}
  path={"lanes.`[swimlane-id]`"}
  relevantWhen={{"type":"check_fields"}}
  required={false}
  templateable={false}
  type={"string"}
  unit={null}
  warnings={[]}
  >

##### `[field_name]`.starts_with

Checks whether a string field starts with a string argument.




</Field>
</Fields>

</Field>
</Fields>

</Field>
</Fields>

## Examples

<Tabs
  block={true}
  defaultValue="ifelse"
  select={false}
  values={[{"label":"If/Else","value":"ifelse"},{"label":"Splitting","value":"splitting"}]}>

<TabItem value="ifelse">

The `swimlanes` transform, in it's simplest form, can act as a simple if/else stream splitter. For example, we can route events from the host `gerry` to a sink `only_loves_gerry`, and all other events to a sink `hates_gerry`:

```toml title="vector.toml"
[transforms.splitting_gerrys]
  inputs = [ "somewhere" ]
  type = "swimlanes"

  [transforms.splitting_gerrys.lanes.only_gerrys]
    type = "check_fields"
    "host.eq" = "gerry"

  [transforms.splitting_gerrys.lanes.no_gerrys]
    type = "check_fields"
    "host.neq" = "gerry"

[sinks.only_loves_gerry]
  inputs = [ "splitting_gerrys.only_gerrys" ]
  type = "something"

[sinks.hates_gerry]
  inputs = [ "splitting_gerrys.no_gerrys" ]
  type = "something_else"
```

This syntax makes it easy to create arbitrary numbers of swimlanes, each with their own logic, and easily route them to downstream components.

</TabItem>

<TabItem value="splitting">

To follow up with the previous `If/Else` example, let's say we want to split a log stream based on all of the log `level` values:

```toml title="vector.toml"
[transforms.level_splitter]
  type = "swimlanes"

  [transforms.level_splitter.lanes.debug_events]
    type = "check_fields"
    "level.eq" = "debug"

  [transforms.level_splitter.lanes.info_events]
    type = "check_fields"
    "level.eq" = "info"

  [transforms.level_splitter.lanes.warn_events]
    type = "check_fields"
    "level.eq" = "warn"

  [transforms.level_splitter.lanes.error_events]
    type = "check_fields"
    "level.eq" = "error"

[sinks.info_printer]
  type = "console"
  inputs = ["level_splitter.info_events"]
  target = "stdout"

[sinks.error_printer]
  type = "console"
  inputs = ["level_splitter.error_events"]
  target = "stderr"

# Add more sinks or transforms that use the `debug_events` and `warn_events`
# streams
```

Notice how we must define mutually exclusive conditions for each `level` value. If a log `level` does not match any of the lanes it will be dropped.

</TabItem>
</Tabs>

## How It Works

### Complex Processing

If you encounter limitations with the `swimlanes`
transform then we recommend using a [runtime transform][urls.vector_programmable_transforms].
These transforms are designed for complex processing and give you the power of
full programming runtime.

### Environment Variables

Environment variables are supported through all of Vector's configuration.
Simply add `${MY_ENV_VAR}` in your Vector configuration file and the variable
will be replaced before being evaluated.

You can learn more in the
[Environment Variables][docs.configuration#environment-variables] section.


[docs.configuration#environment-variables]: /docs/setup/configuration/#environment-variables
[docs.data-model.log]: /docs/about/data-model/log/
[urls.regex]: https://en.wikipedia.org/wiki/Regular_expression
[urls.rust_regex_syntax]: https://docs.rs/regex/1.3.6/regex/#syntax
[urls.vector_programmable_transforms]: https://vector.dev/components/?functions%5B%5D=program