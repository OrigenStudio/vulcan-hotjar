# Vulcan Hotjar
Hotjar integration for VulcanJS

## Set-up

### Install
```
meteor add origenstudio:vulcan-hotjar
```

### Settings

In your app settings.json file add:

```
{
    //...
    "public": {
        //...
          "hotjar": {
            "id": "YOUR_HOTJAR_ID",
            "snippetVersion": "SNIPPET_VERSION"
        },
    }
}

```

### Run your app
Check on your Hotjar dashboard to verify the integration is complete

## What it does?

This package download the Hotjar dependencies from its CDN and initializes them with your setting details.

If you have any feature request you can open and issue :wink:





