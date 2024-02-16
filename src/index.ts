import { APIData, Service, Services } from './types';
import styles from './styles.module.scss';

function createRootElement(): HTMLElement {
  const element: HTMLElement = document.createElement('div');
  element.id = 'root';
  element.className = styles.root;
  return element;
}

function createULElement(): HTMLUListElement {
  const element: HTMLUListElement = document.createElement('ul');
  element.className = styles.services;
  return element;
}

function createLIElement(service: Service): HTMLLIElement {
  const element: HTMLLIElement = document.createElement('li');
  element.className = styles.service;
  element.textContent = `${service.name} ${service.price > 0 ? (service.price) : ''}`;
  return element;
}

function createFolder(services: Services, parentId: number, parentElement: HTMLElement) {
  const subFolders = services.filter((folder) => folder.head === parentId);
  if (subFolders.length === 0) return;

  subFolders.sort((a, b) => a.sorthead - b.sorthead);

  const ul = createULElement();
  parentElement.appendChild(ul);

  subFolders.forEach((folder) => {
    const li =  createLIElement(folder);
    ul.appendChild(li);
    if (folder.node === 1) createFolder(services, folder.id, li);
  });
}

async function render() {
  const app = createRootElement();
  const { services } = await fetchData();
  createFolder(services, null, app);
  document.body.appendChild(app);
}

async function fetchData(): Promise<APIData> {
  try {
    const res = await fetch("data.json");
    const data: APIData = await res.json();
    return data;
  } catch {
    console.log('fetching data error');
  }
}


render();
