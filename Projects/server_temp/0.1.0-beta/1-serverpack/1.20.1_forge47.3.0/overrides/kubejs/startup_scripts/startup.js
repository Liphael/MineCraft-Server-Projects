// priority: 0

onForgeEvent("net.minecraftforge.client.event.ClientChatReceivedEvent", (homestead) => {
  if (homestead.getMessage().getContents().includes("TFC Homestead INFO")) {
    homestead.setCanceled(true)
  }
})