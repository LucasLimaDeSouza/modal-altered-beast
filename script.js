const Modal = {
    
    open(beasts){
      document.querySelector('.box-modal')
        .classList.add('active')
        if (beasts === 'Werewolf'){
            document.querySelector('#beast-image').setAttribute('src','https://alchetron.com/cdn/altered-beast-2005-video-game-588f7f4e-3253-48c0-a33d-c0d5bbd3ffd-resize-750.jpeg')
            document.querySelector('#title-modal').innerHTML='Werewolf'
            document.querySelector('#element').innerHTML="Poder - Luz"
            document.querySelector('#attack').innerHTML= "Attack - Garras"
            document.querySelector('#mutation').innerHTML= "Mutação - Homem + Lobo"
        } else if (beasts === 'Merman') {
            document.querySelector('#beast-image').setAttribute('src','https://i.ytimg.com/vi/_ixWuMPopkk/maxresdefault.jpg')
            document.querySelector('#title-modal').innerHTML='Merman'
            document.querySelector('#element').innerHTML="Poder - Água"
            document.querySelector('#attack').innerHTML="Attack - Bola d'agua"
            document.querySelector('#mutation').innerHTML="Mutação - Homem + Peixe"
        } else if (beasts === 'Wendigo') {
            document.querySelector('#beast-image').setAttribute('src','https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a92ec5a2-5855-4109-abb4-c4fab1b03cc4/d7yq4dk-17614e97-51cf-463e-9233-ebccd51d8833.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E5MmVjNWEyLTU4NTUtNDEwOS1hYmI0LWM0ZmFiMWIwM2NjNFwvZDd5cTRkay0xNzYxNGU5Ny01MWNmLTQ2M2UtOTIzMy1lYmNjZDUxZDg4MzMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BIiyogFg159kLo75yFWJw6KfKZI91fOGXdAtr33z9eA')
            document.querySelector('#title-modal').innerHTML='Wendigo'
            document.querySelector('#element').innerHTML="Poder - Gelo"
            document.querySelector('#attack').innerHTML="Attack - Força, Gelo"
            document.querySelector('#mutation').innerHTML="Mutação - Homem + Macaco"
        } else if (beasts === 'Garuda') {
            document.querySelector('#beast-image').setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOy96Rg_EyJvtcTAv5IK2eg47BBZnEFsmmrQ&usqp=CAU')
            document.querySelector('#title-modal').innerHTML='Garuda'
            document.querySelector('#element').innerHTML="Poder - Ar"
            document.querySelector('#attack').innerHTML="Attack - Penas afiadas, Tornados"
            document.querySelector('#mutation').innerHTML="Mutação - Homem + Águia"
        } else if (beasts === 'Minotaur') {
            document.querySelector('#beast-image').setAttribute('src','https://i.ytimg.com/vi/i06tENrMTio/maxresdefault.jpg')
            document.querySelector('#title-modal').innerHTML='Minotaur'
            document.querySelector('#element').innerHTML="Poder - Fogo"
            document.querySelector('#attack').innerHTML="Attack - Socos, Chifres, Fogo"
            document.querySelector('#mutation').innerHTML="Mutação - Homem + Touro"
        } else if (beasts === 'Dragon') {
            document.querySelector('#beast-image').setAttribute('src','https://i.ytimg.com/vi/jGfgLFATvmQ/hqdefault.jpg')
            document.querySelector('#title-modal').innerHTML='Dragon'
            document.querySelector('#element').innerHTML="Poder - Eletricidade"
            document.querySelector('#attack').innerHTML="Attack - Bolas de Energia, Explosões Elétricas"
            document.querySelector('#mutation').innerHTML="Mutação - Homem + Dragão"
        } else if (beasts === 'Grizzly Bear') {
            document.querySelector('#beast-image').setAttribute('src','https://i.ytimg.com/vi/gs-YsA2xVzs/maxresdefault.jpg')
            document.querySelector('#title-modal').innerHTML='Grizzly Bear'
            document.querySelector('#element').innerHTML="Poder - Terra"
            document.querySelector('#attack').innerHTML="Attack - Kung-Fu, Petrificação"
            document.querySelector('#mutation').innerHTML="Mutação - Homem + Urso"
        } else if (beasts === 'U.W.H') {
            document.querySelector('#beast-image').setAttribute('src','https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/741a3f5b-1409-4eaf-9f17-09c07dae73f8/d1yc08x-05a13b28-8bdb-4b59-86c5-5ce982190610.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc0MWEzZjViLTE0MDktNGVhZi05ZjE3LTA5YzA3ZGFlNzNmOFwvZDF5YzA4eC0wNWExM2IyOC04YmRiLTRiNTktODZjNS01Y2U5ODIxOTA2MTAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PTq5CahMfpvE-FzAbaiAKsvADkP_o9HKQVZXvz28cXU')
            document.querySelector('#title-modal').innerHTML='U.W.H'
            document.querySelector('#element').innerHTML="Poder - Gravidade"
            document.querySelector('#attack').innerHTML="Attack - Gravidade"
            document.querySelector('#mutation').innerHTML="Mutação - Homem + E.T"
        } else if (beasts === 'Weretiger') {
            document.querySelector('#beast-image').setAttribute('src','https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a92ec5a2-5855-4109-abb4-c4fab1b03cc4/d7yq4d7-f2a58c2c-999f-4e5b-8c44-011d1fc23b04.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E5MmVjNWEyLTU4NTUtNDEwOS1hYmI0LWM0ZmFiMWIwM2NjNFwvZDd5cTRkNy1mMmE1OGMyYy05OTlmLTRlNWItOGM0NC0wMTFkMWZjMjNiMDQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BEmts-z866TKH3iYKtYkirQ_-lzWqQQiFUxG7E5Tr1k')
            document.querySelector('#title-modal').innerHTML='Weretiger'
            document.querySelector('#element').innerHTML="Poder - Escuridão"
            document.querySelector('#attack').innerHTML="Attack - Garras"
            document.querySelector('#mutation').innerHTML="Mutação - Homem + Tigre"
        }
    },

    close(){
      document.querySelector('.box-modal')
        .classList.remove('active')
    }

  }
