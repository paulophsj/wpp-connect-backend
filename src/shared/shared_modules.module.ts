import { Module } from "@nestjs/common";

import { CardapioModule } from "src/models/cardapio/cardapio.module";
import { ClienteModule } from "src/models/clientes/clientes.module";
import { ControleFluxoModule } from "src/models/controle-fluxo/controleFluxo.module";
import { MensagemModule } from "src/models/mensagem/mensagem.module";
import { PedidoItemModule } from "src/models/pedido-item/pedidoItem.module";
import { PedidoModule } from "src/models/pedido/pedido.module";
import { RegiaoEntregaModule } from "src/models/regiao-entrega/regiaoEntrega.module";
import { WhatsappModule } from "src/whatsapp/whatsapp.module";
import { ClienteFluxoModule } from "./shared_fluxos.module";
import { MensagemFluxoModule } from "src/models/mensagem-fluxo/mensagemFluxo.module";

@Module({
    imports: [
        CardapioModule,
        ClienteModule,
        MensagemModule,
        PedidoModule,
        PedidoItemModule,
        RegiaoEntregaModule,
        ControleFluxoModule,
        ClienteFluxoModule,
        MensagemFluxoModule,
        WhatsappModule,
    ],
    providers: [],
    exports: [
        CardapioModule,
        ClienteModule,
        MensagemModule,
        PedidoModule,
        PedidoItemModule,
        RegiaoEntregaModule,
        ControleFluxoModule,
        ClienteFluxoModule,
        MensagemFluxoModule,
        WhatsappModule,
    ]
})

export class SharedModules {}