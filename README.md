# SVG+javascript Home Assistant WebSocket API floorplan
this project create floor plan to show and interact with the different entities.
only need to put the files into de configuration/www folder.
I has used the old Corel draw to draw the floorplan and arrange all the graphics objects with the correct ID.

if you want to show the florplan in the sidebar you can add this to the configuration.yaml:

# panel iframe
panel_iframe:
  plano:
    title: "Plano"
    icon: mdi:floor-plan
    url: "/local/index.html"
