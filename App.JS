/**
 
 * APLICATIVO ACADÊMICO
 * Tecnologia e Inovação Digital
 * Autor: Lucas Almeida
 * RA: 22403149
 * 
 * Disciplina: Programação para Dispositivos Móveis
 * Data: 2026
 * 
 * Descrição:
 * Aplicativo React Native com lista de informações sobre tecnologia,
 * detalhes adicionais e formulário interativo com componentes de entrada.
 */

import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Slider,
  Switch,
  StyleSheet,
  Alert,
  FlatList,
  Modal,
} from "react-native";

const App = () => {
  // Estados para o formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [categoria, setCategoria] = useState("tecnologia");
  const [prioridade, setPrioridade] = useState("media");
  const [idade, setIdade] = useState(25);
  const [orçamento, setOrçamento] = useState(1000);
  const [notificacoes, setNotificacoes] = useState(true);
  const [newsletter, setNewsletter] = useState(false);
  const [activeTab, setActiveTab] = useState("lista");
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Dados da lista com informações e imagens
  const listaInformacoes = [
    {
      id: 1,
      titulo: "Inteligência Artificial",
      descricao:
        "A Inteligência Artificial é uma tecnologia revolucionária que está transformando diversos setores da sociedade. Ela permite que máquinas aprendam com dados e tomem decisões de forma autônoma, sem serem explicitamente programadas para cada tarefa específica.",
      imagem: "https://via.placeholder.com/300x200/4A90E2/FFFFFF?text=IA",
      cor: "#4A90E2",
    },
    {
      id: 2,
      titulo: "Machine Learning",
      descricao:
        "Machine Learning é um subcampo da IA que permite aos sistemas aprender e melhorar com a experiência. Algoritmos de aprendizado de máquina analisam padrões em grandes volumes de dados para fazer previsões precisas e identificar tendências importantes.",
      imagem: "https://via.placeholder.com/300x200/7B68EE/FFFFFF?text=ML",
      cor: "#7B68EE",
    },
    {
      id: 3,
      titulo: "Desenvolvimento Web",
      descricao:
        "O desenvolvimento web envolve a criação de aplicações e sites interativos que funcionam em navegadores. Utiliza tecnologias como HTML, CSS e JavaScript para construir interfaces responsivas e experiências de usuário incríveis que funcionam em todos os dispositivos.",
      imagem: "https://via.placeholder.com/300x200/50C878/FFFFFF?text=Web",
      cor: "#50C878",
    },
    {
      id: 4,
      titulo: "Desenvolvimento Mobile",
      descricao:
        "Desenvolvimento mobile é a criação de aplicações para dispositivos móveis como smartphones e tablets. Utiliza frameworks como React Native, Flutter e linguagens nativas para criar apps que oferecem experiências otimizadas para telas pequenas e toque.",
      imagem: "https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Mobile",
      cor: "#FF6B6B",
    },
    {
      id: 5,
      titulo: "Cloud Computing",
      descricao:
        "Cloud Computing oferece acesso a recursos computacionais pela internet, eliminando a necessidade de infraestrutura local. Serviços em nuvem como AWS, Azure e Google Cloud permitem escalabilidade, flexibilidade e redução de custos operacionais para empresas.",
      imagem: "https://via.placeholder.com/300x200/FFD700/FFFFFF?text=Cloud",
      cor: "#FFD700",
    },
    {
      id: 6,
      titulo: "Segurança da Informação",
      descricao:
        "Segurança da informação é essencial para proteger dados sensíveis contra acessos não autorizados e ataques cibernéticos. Envolve implementação de criptografia, firewalls, autenticação multifator e práticas de segurança para garantir confidencialidade e integridade dos dados.",
      imagem: "https://via.placeholder.com/300x200/FF1493/FFFFFF?text=Security",
      cor: "#FF1493",
    },
  ];

  // Dados adicionais com descrições detalhadas
  const informacoesDetalhadas = [
    {
      id: 1,
      titulo: "Redes Neurais Artificiais",
      descricao:
        "As redes neurais artificiais são modelos computacionais inspirados no funcionamento do cérebro humano. Compostas por camadas de neurônios interconectados, elas conseguem aprender padrões complexos em dados através de algoritmos de treinamento como backpropagation, sendo fundamentais para aplicações de deep learning.",
      imagem: "https://via.placeholder.com/300x200/1E90FF/FFFFFF?text=Neural",
    },
    {
      id: 2,
      titulo: "Processamento de Linguagem Natural",
      descricao:
        "O Processamento de Linguagem Natural permite que computadores entendam e gerem texto de forma similar aos humanos. Utiliza técnicas de análise sintática, semântica e modelos de linguagem para tarefas como tradução automática, análise de sentimentos, chatbots e assistentes virtuais inteligentes.",
      imagem: "https://via.placeholder.com/300x200/32CD32/FFFFFF?text=NLP",
    },
    {
      id: 3,
      titulo: "Visão Computacional",
      descricao:
        "Visão computacional permite que máquinas interpretem e entendam imagens e vídeos do mundo real. Utiliza algoritmos de processamento de imagem e deep learning para reconhecimento de objetos, detecção de faces, análise de cenas e outras aplicações visuais complexas.",
      imagem: "https://via.placeholder.com/300x200/FF4500/FFFFFF?text=Vision",
    },
    {
      id: 4,
      titulo: "Big Data Analytics",
      descricao:
        "Big Data Analytics envolve análise de grandes volumes de dados para extrair insights valiosos e tomar decisões informadas. Utiliza ferramentas como Hadoop, Spark e data warehouses para processar, armazenar e analisar dados estruturados e não estruturados de múltiplas fontes.",
      imagem: "https://via.placeholder.com/300x200/8B008B/FFFFFF?text=BigData",
    },
    {
      id: 5,
      titulo: "Internet das Coisas",
      descricao:
        "A Internet das Coisas conecta dispositivos físicos à internet para coletar e compartilhar dados em tempo real. Sensores e atuadores em objetos do dia a dia permitem automação, monitoramento remoto e criação de ambientes inteligentes em casas, cidades e indústrias.",
      imagem: "https://via.placeholder.com/300x200/00CED1/FFFFFF?text=IoT",
    },
  ];

  const categorias = ["tecnologia", "negocios", "educacao", "saude", "outro"];
  const prioridades = ["baixa", "media", "alta", "urgente"];

  const handleSubmit = () => {
    if (!nome || !email || !telefone || !endereco) {
      Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    const mensagem = `
Dados Enviados com Sucesso!

Nome: ${nome}
Email: ${email}
Telefone: ${telefone}
Endereço: ${endereco}
Categoria: ${categoria}
Prioridade: ${prioridade}
Idade: ${Math.round(idade)} anos
Orçamento: R$ ${orçamento.toFixed(2)}
Notificações: ${notificacoes ? "Ativadas" : "Desativadas"}
Newsletter: ${newsletter ? "Inscrito" : "Não inscrito"}
    `;

    Alert.alert("Sucesso", mensagem);
    limparFormulario();
  };

  const limparFormulario = () => {
    setNome("");
    setEmail("");
    setTelefone("");
    setEndereco("");
    setCategoria("tecnologia");
    setPrioridade("media");
    setIdade(25);
    setOrçamento(1000);
    setNotificacoes(true);
    setNewsletter(false);
  };

  const renderItemLista = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.cardLista,
        { borderLeftColor: item.cor, borderLeftWidth: 5 },
      ]}
      onPress={() => {
        setSelectedItem(item);
        setModalVisible(true);
      }}
    >
      <Image source={{ uri: item.imagem }} style={styles.imagemLista} />
      <View style={styles.conteudoLista}>
        <Text style={styles.tituloLista}>{item.titulo}</Text>
        <Text style={styles.descricaoLista} numberOfLines={2}>
          {item.descricao}
        </Text>
        <Text style={styles.verMais}>Toque para ver mais →</Text>
      </View>
    </TouchableOpacity>
  );

  const renderItemDetalhes = ({ item }) => (
    <View style={styles.cardDetalhes}>
      <Image source={{ uri: item.imagem }} style={styles.imagemDetalhes} />
      <View style={styles.conteudoDetalhes}>
        <Text style={styles.tituloDetalhes}>{item.titulo}</Text>
        <Text style={styles.descricaoDetalhes}>{item.descricao}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Abas de Navegação */}
      <View style={styles.abasContainer}>
        <TouchableOpacity
          style={[styles.aba, activeTab === "lista" && styles.abaAtiva]}
          onPress={() => setActiveTab("lista")}
        >
          <Text
            style={[
              styles.abaTexto,
              activeTab === "lista" && styles.abaTextoAtivo,
            ]}
          >
            Lista
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.aba, activeTab === "detalhes" && styles.abaAtiva]}
          onPress={() => setActiveTab("detalhes")}
        >
          <Text
            style={[
              styles.abaTexto,
              activeTab === "detalhes" && styles.abaTextoAtivo,
            ]}
          >
            Detalhes
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.conteudo}>
        {/* Aba Lista */}
        {activeTab === "lista" && (
          <View style={styles.secao}>
            <Text style={styles.titulo}>📚 Lista de Informações</Text>
            <FlatList
              data={listaInformacoes}
              renderItem={renderItemLista}
              keyExtractor={(item) => item.id.toString()}
              scrollEnabled={false}
            />
          </View>
        )}

        {/* Aba Detalhes */}
        {activeTab === "detalhes" && (
          <View style={styles.secao}>
            <Text style={styles.titulo}>📖 Informações Detalhadas</Text>
            <FlatList
              data={informacoesDetalhadas}
              renderItem={renderItemDetalhes}
              keyExtractor={(item) => item.id.toString()}
              scrollEnabled={false}
            />

            {/* Créditos */}
            <View style={styles.creditosContainer}>
              <Text style={styles.creditosTitulo}>Desenvolvido por</Text>
              <Text style={styles.creditosNome}>Lucas Almeida</Text>
              <Text style={styles.creditosRA}>RA: 22403149</Text>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Modal de Detalhes */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.fecharModal}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.fecharModalTexto}>✕</Text>
            </TouchableOpacity>

            {selectedItem && (
              <ScrollView>
                <Image
                  source={{ uri: selectedItem.imagem }}
                  style={styles.imagemModal}
                />
                <View style={styles.conteudoModal}>
                  <Text style={styles.tituloModal}>{selectedItem.titulo}</Text>
                  <Text style={styles.descricaoModal}>
                    {selectedItem.descricao}
                  </Text>
                </View>
              </ScrollView>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  abasContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingTop: 40,
  },
  aba: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderBottomWidth: 3,
    borderBottomColor: "transparent",
  },
  abaAtiva: {
    borderBottomColor: "#4A90E2",
  },
  abaTexto: {
    fontSize: 14,
    fontWeight: "600",
    color: "#999",
  },
  abaTextoAtivo: {
    color: "#4A90E2",
  },
  conteudo: {
    flex: 1,
  },
  secao: {
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
    textAlign: "center",
  },
  labelSecao: {
    fontSize: 16,
    fontWeight: "700",
    color: "#4A90E2",
    marginTop: 20,
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
    fontSize: 14,
    color: "#333",
  },
  selectorContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 16,
  },
  selectorButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  selectorButtonAtivo: {
    backgroundColor: "#4A90E2",
    borderColor: "#4A90E2",
  },
  selectorButtonTexto: {
    fontSize: 12,
    fontWeight: "600",
    color: "#333",
  },
  selectorButtonTextoAtivo: {
    color: "#FFFFFF",
  },
  slider: {
    height: 40,
    marginBottom: 16,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  switchLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  botoesContainer: {
    flexDirection: "row",
    gap: 12,
    marginTop: 24,
    marginBottom: 32,
  },
  botao: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  botaoEnviar: {
    backgroundColor: "#4CAF50",
  },
  botaoLimpar: {
    backgroundColor: "#FF6B6B",
  },
  botaoTexto: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },
  cardLista: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    marginBottom: 12,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imagemLista: {
    width: 100,
    height: 100,
  },
  conteudoLista: {
    flex: 1,
    padding: 12,
    justifyContent: "space-between",
  },
  tituloLista: {
    fontSize: 14,
    fontWeight: "700",
    color: "#333",
    marginBottom: 4,
  },
  descricaoLista: {
    fontSize: 12,
    color: "#666",
    lineHeight: 16,
  },
  verMais: {
    fontSize: 11,
    color: "#4A90E2",
    fontWeight: "600",
    marginTop: 4,
  },
  cardDetalhes: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imagemDetalhes: {
    width: "100%",
    height: 200,
  },
  conteudoDetalhes: {
    padding: 16,
  },
  tituloDetalhes: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
    marginBottom: 8,
  },
  descricaoDetalhes: {
    fontSize: 13,
    color: "#666",
    lineHeight: 20,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    maxHeight: "90%",
    paddingTop: 16,
  },
  fecharModal: {
    alignSelf: "flex-end",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  fecharModalTexto: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF6B6B",
  },
  imagemModal: {
    width: "100%",
    height: 250,
  },
  conteudoModal: {
    padding: 16,
  },
  tituloModal: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
    marginBottom: 12,
  },
  descricaoModal: {
    fontSize: 14,
    color: "#666",
    lineHeight: 22,
    marginBottom: 16,
  },
  creditosContainer: {
    backgroundColor: "#E3F2FD",
    borderWidth: 2,
    borderColor: "#4A90E2",
    borderRadius: 12,
    padding: 16,
    marginTop: 24,
    marginBottom: 32,
    alignItems: "center",
  },
  creditosTitulo: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  creditosNome: {
    fontSize: 18,
    fontWeight: "700",
    color: "#4A90E2",
    marginBottom: 4,
  },
  creditosRA: {
    fontSize: 12,
    color: "#999",
    fontWeight: "600",
  },
});

export default App;
