RegisterNUICallback('close', function(data)
    SetNuiFocus(false, false)
    SetNuiFocusKeepInput(false)
end)

RegisterNetEvent('S:ShowImage', function(image_url)
    ShowImage(image_url)
end)

function ShowImage(url)
    SetNuiFocus(true, true)
    SetNuiFocusKeepInput(false)
    SendNUIMessage({
        type = "ShowImage",
        url = url
    })
end