/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "ms-rest-azure-js";
import * as msRest from "ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const Resource: msRest.CompositeMapper = {
  serializedName: "Resource",
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      location: {
        required: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ContainerServiceCustomProfile: msRest.CompositeMapper = {
  serializedName: "ContainerServiceCustomProfile",
  type: {
    name: "Composite",
    className: "ContainerServiceCustomProfile",
    modelProperties: {
      orchestrator: {
        required: true,
        serializedName: "orchestrator",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const KeyVaultSecretRef: msRest.CompositeMapper = {
  serializedName: "KeyVaultSecretRef",
  type: {
    name: "Composite",
    className: "KeyVaultSecretRef",
    modelProperties: {
      vaultID: {
        required: true,
        serializedName: "vaultID",
        type: {
          name: "String"
        }
      },
      secretName: {
        required: true,
        serializedName: "secretName",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerServiceServicePrincipalProfile: msRest.CompositeMapper = {
  serializedName: "ContainerServiceServicePrincipalProfile",
  type: {
    name: "Composite",
    className: "ContainerServiceServicePrincipalProfile",
    modelProperties: {
      clientId: {
        required: true,
        serializedName: "clientId",
        type: {
          name: "String"
        }
      },
      secret: {
        serializedName: "secret",
        type: {
          name: "String"
        }
      },
      keyVaultSecretRef: {
        serializedName: "keyVaultSecretRef",
        type: {
          name: "Composite",
          className: "KeyVaultSecretRef"
        }
      }
    }
  }
};

export const ContainerServiceOrchestratorProfile: msRest.CompositeMapper = {
  serializedName: "ContainerServiceOrchestratorProfile",
  type: {
    name: "Composite",
    className: "ContainerServiceOrchestratorProfile",
    modelProperties: {
      orchestratorType: {
        required: true,
        serializedName: "orchestratorType",
        type: {
          name: "String"
        }
      },
      orchestratorVersion: {
        serializedName: "orchestratorVersion",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerServiceMasterProfile: msRest.CompositeMapper = {
  serializedName: "ContainerServiceMasterProfile",
  type: {
    name: "Composite",
    className: "ContainerServiceMasterProfile",
    modelProperties: {
      count: {
        serializedName: "count",
        defaultValue: 1,
        type: {
          name: "Number"
        }
      },
      dnsPrefix: {
        required: true,
        serializedName: "dnsPrefix",
        type: {
          name: "String"
        }
      },
      vmSize: {
        required: true,
        serializedName: "vmSize",
        type: {
          name: "String"
        }
      },
      osDiskSizeGB: {
        serializedName: "osDiskSizeGB",
        type: {
          name: "Number"
        }
      },
      vnetSubnetID: {
        serializedName: "vnetSubnetID",
        type: {
          name: "String"
        }
      },
      firstConsecutiveStaticIP: {
        serializedName: "firstConsecutiveStaticIP",
        defaultValue: '10.240.255.5',
        type: {
          name: "String"
        }
      },
      storageProfile: {
        serializedName: "storageProfile",
        type: {
          name: "String"
        }
      },
      fqdn: {
        readOnly: true,
        serializedName: "fqdn",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerServiceAgentPoolProfile: msRest.CompositeMapper = {
  serializedName: "ContainerServiceAgentPoolProfile",
  type: {
    name: "Composite",
    className: "ContainerServiceAgentPoolProfile",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      count: {
        serializedName: "count",
        defaultValue: 1,
        constraints: {
          InclusiveMaximum: 100,
          InclusiveMinimum: 1
        },
        type: {
          name: "Number"
        }
      },
      vmSize: {
        required: true,
        serializedName: "vmSize",
        type: {
          name: "String"
        }
      },
      osDiskSizeGB: {
        serializedName: "osDiskSizeGB",
        type: {
          name: "Number"
        }
      },
      dnsPrefix: {
        serializedName: "dnsPrefix",
        type: {
          name: "String"
        }
      },
      fqdn: {
        readOnly: true,
        serializedName: "fqdn",
        type: {
          name: "String"
        }
      },
      ports: {
        serializedName: "ports",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      storageProfile: {
        serializedName: "storageProfile",
        type: {
          name: "String"
        }
      },
      vnetSubnetID: {
        serializedName: "vnetSubnetID",
        type: {
          name: "String"
        }
      },
      osType: {
        serializedName: "osType",
        defaultValue: 'Linux',
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerServiceWindowsProfile: msRest.CompositeMapper = {
  serializedName: "ContainerServiceWindowsProfile",
  type: {
    name: "Composite",
    className: "ContainerServiceWindowsProfile",
    modelProperties: {
      adminUsername: {
        required: true,
        serializedName: "adminUsername",
        constraints: {
          Pattern: /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/
        },
        type: {
          name: "String"
        }
      },
      adminPassword: {
        required: true,
        serializedName: "adminPassword",
        constraints: {
          Pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%\^&\*\(\)])[a-zA-Z\d!@#$%\^&\*\(\)]{12,123}$/
        },
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerServiceSshPublicKey: msRest.CompositeMapper = {
  serializedName: "ContainerServiceSshPublicKey",
  type: {
    name: "Composite",
    className: "ContainerServiceSshPublicKey",
    modelProperties: {
      keyData: {
        required: true,
        serializedName: "keyData",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerServiceSshConfiguration: msRest.CompositeMapper = {
  serializedName: "ContainerServiceSshConfiguration",
  type: {
    name: "Composite",
    className: "ContainerServiceSshConfiguration",
    modelProperties: {
      publicKeys: {
        required: true,
        serializedName: "publicKeys",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ContainerServiceSshPublicKey"
            }
          }
        }
      }
    }
  }
};

export const ContainerServiceLinuxProfile: msRest.CompositeMapper = {
  serializedName: "ContainerServiceLinuxProfile",
  type: {
    name: "Composite",
    className: "ContainerServiceLinuxProfile",
    modelProperties: {
      adminUsername: {
        required: true,
        serializedName: "adminUsername",
        constraints: {
          Pattern: /^[A-Za-z][-A-Za-z0-9_]*$/
        },
        type: {
          name: "String"
        }
      },
      ssh: {
        required: true,
        serializedName: "ssh",
        type: {
          name: "Composite",
          className: "ContainerServiceSshConfiguration"
        }
      }
    }
  }
};

export const ContainerServiceVMDiagnostics: msRest.CompositeMapper = {
  serializedName: "ContainerServiceVMDiagnostics",
  type: {
    name: "Composite",
    className: "ContainerServiceVMDiagnostics",
    modelProperties: {
      enabled: {
        required: true,
        serializedName: "enabled",
        type: {
          name: "Boolean"
        }
      },
      storageUri: {
        readOnly: true,
        serializedName: "storageUri",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerServiceDiagnosticsProfile: msRest.CompositeMapper = {
  serializedName: "ContainerServiceDiagnosticsProfile",
  type: {
    name: "Composite",
    className: "ContainerServiceDiagnosticsProfile",
    modelProperties: {
      vmDiagnostics: {
        required: true,
        serializedName: "vmDiagnostics",
        type: {
          name: "Composite",
          className: "ContainerServiceVMDiagnostics"
        }
      }
    }
  }
};

export const ContainerServiceProperties: msRest.CompositeMapper = {
  serializedName: "ContainerServiceProperties",
  type: {
    name: "Composite",
    className: "ContainerServiceProperties",
    modelProperties: {
      provisioningState: {
        readOnly: true,
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      },
      orchestratorProfile: {
        required: true,
        serializedName: "orchestratorProfile",
        type: {
          name: "Composite",
          className: "ContainerServiceOrchestratorProfile"
        }
      },
      customProfile: {
        serializedName: "customProfile",
        type: {
          name: "Composite",
          className: "ContainerServiceCustomProfile"
        }
      },
      servicePrincipalProfile: {
        serializedName: "servicePrincipalProfile",
        type: {
          name: "Composite",
          className: "ContainerServiceServicePrincipalProfile"
        }
      },
      masterProfile: {
        required: true,
        serializedName: "masterProfile",
        type: {
          name: "Composite",
          className: "ContainerServiceMasterProfile"
        }
      },
      agentPoolProfiles: {
        serializedName: "agentPoolProfiles",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ContainerServiceAgentPoolProfile"
            }
          }
        }
      },
      windowsProfile: {
        serializedName: "windowsProfile",
        type: {
          name: "Composite",
          className: "ContainerServiceWindowsProfile"
        }
      },
      linuxProfile: {
        required: true,
        serializedName: "linuxProfile",
        type: {
          name: "Composite",
          className: "ContainerServiceLinuxProfile"
        }
      },
      diagnosticsProfile: {
        serializedName: "diagnosticsProfile",
        type: {
          name: "Composite",
          className: "ContainerServiceDiagnosticsProfile"
        }
      }
    }
  }
};

export const ContainerService: msRest.CompositeMapper = {
  serializedName: "ContainerService",
  type: {
    name: "Composite",
    className: "ContainerService",
    modelProperties: {
      ...Resource.type.modelProperties,
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      orchestratorProfile: {
        required: true,
        serializedName: "properties.orchestratorProfile",
        type: {
          name: "Composite",
          className: "ContainerServiceOrchestratorProfile"
        }
      },
      customProfile: {
        serializedName: "properties.customProfile",
        type: {
          name: "Composite",
          className: "ContainerServiceCustomProfile"
        }
      },
      servicePrincipalProfile: {
        serializedName: "properties.servicePrincipalProfile",
        type: {
          name: "Composite",
          className: "ContainerServiceServicePrincipalProfile"
        }
      },
      masterProfile: {
        required: true,
        serializedName: "properties.masterProfile",
        type: {
          name: "Composite",
          className: "ContainerServiceMasterProfile"
        }
      },
      agentPoolProfiles: {
        serializedName: "properties.agentPoolProfiles",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ContainerServiceAgentPoolProfile"
            }
          }
        }
      },
      windowsProfile: {
        serializedName: "properties.windowsProfile",
        type: {
          name: "Composite",
          className: "ContainerServiceWindowsProfile"
        }
      },
      linuxProfile: {
        required: true,
        serializedName: "properties.linuxProfile",
        type: {
          name: "Composite",
          className: "ContainerServiceLinuxProfile"
        }
      },
      diagnosticsProfile: {
        serializedName: "properties.diagnosticsProfile",
        type: {
          name: "Composite",
          className: "ContainerServiceDiagnosticsProfile"
        }
      }
    }
  }
};

export const OperationValueDisplay: msRest.CompositeMapper = {
  serializedName: "OperationValueDisplay",
  type: {
    name: "Composite",
    className: "OperationValueDisplay",
    modelProperties: {
      operation: {
        readOnly: true,
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      resource: {
        readOnly: true,
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      description: {
        readOnly: true,
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      provider: {
        readOnly: true,
        serializedName: "provider",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationValue: msRest.CompositeMapper = {
  serializedName: "OperationValue",
  type: {
    name: "Composite",
    className: "OperationValue",
    modelProperties: {
      origin: {
        readOnly: true,
        serializedName: "origin",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      operation: {
        readOnly: true,
        serializedName: "display.operation",
        type: {
          name: "String"
        }
      },
      resource: {
        readOnly: true,
        serializedName: "display.resource",
        type: {
          name: "String"
        }
      },
      description: {
        readOnly: true,
        serializedName: "display.description",
        type: {
          name: "String"
        }
      },
      provider: {
        readOnly: true,
        serializedName: "display.provider",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TagsObject: msRest.CompositeMapper = {
  serializedName: "TagsObject",
  type: {
    name: "Composite",
    className: "TagsObject",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ManagedClusterServicePrincipalProfile: msRest.CompositeMapper = {
  serializedName: "ManagedClusterServicePrincipalProfile",
  type: {
    name: "Composite",
    className: "ManagedClusterServicePrincipalProfile",
    modelProperties: {
      clientId: {
        required: true,
        serializedName: "clientId",
        type: {
          name: "String"
        }
      },
      secret: {
        serializedName: "secret",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ManagedClusterAgentPoolProfile: msRest.CompositeMapper = {
  serializedName: "ManagedClusterAgentPoolProfile",
  type: {
    name: "Composite",
    className: "ManagedClusterAgentPoolProfile",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      count: {
        serializedName: "count",
        defaultValue: 1,
        constraints: {
          InclusiveMaximum: 100,
          InclusiveMinimum: 1
        },
        type: {
          name: "Number"
        }
      },
      vmSize: {
        required: true,
        serializedName: "vmSize",
        type: {
          name: "String"
        }
      },
      osDiskSizeGB: {
        serializedName: "osDiskSizeGB",
        type: {
          name: "Number"
        }
      },
      storageProfile: {
        readOnly: true,
        serializedName: "storageProfile",
        type: {
          name: "String"
        }
      },
      vnetSubnetID: {
        serializedName: "vnetSubnetID",
        type: {
          name: "String"
        }
      },
      maxPods: {
        serializedName: "maxPods",
        type: {
          name: "Number"
        }
      },
      osType: {
        serializedName: "osType",
        defaultValue: 'Linux',
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerServiceNetworkProfile: msRest.CompositeMapper = {
  serializedName: "ContainerServiceNetworkProfile",
  type: {
    name: "Composite",
    className: "ContainerServiceNetworkProfile",
    modelProperties: {
      networkPlugin: {
        serializedName: "networkPlugin",
        defaultValue: 'kubenet',
        type: {
          name: "String"
        }
      },
      networkPolicy: {
        serializedName: "networkPolicy",
        type: {
          name: "String"
        }
      },
      podCidr: {
        serializedName: "podCidr",
        defaultValue: '10.244.0.0/16',
        constraints: {
          Pattern: /^([0-9]{1,3}\.){3}[0-9]{1,3}(\\/([0-9]|[1-2][0-9]|3[0-2]))?$/
        },
        type: {
          name: "String"
        }
      },
      serviceCidr: {
        serializedName: "serviceCidr",
        defaultValue: '10.0.0.0/16',
        constraints: {
          Pattern: /^([0-9]{1,3}\.){3}[0-9]{1,3}(\\/([0-9]|[1-2][0-9]|3[0-2]))?$/
        },
        type: {
          name: "String"
        }
      },
      dnsServiceIP: {
        serializedName: "dnsServiceIP",
        defaultValue: '10.0.0.10',
        constraints: {
          Pattern: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
        },
        type: {
          name: "String"
        }
      },
      dockerBridgeCidr: {
        serializedName: "dockerBridgeCidr",
        defaultValue: '172.17.0.1/16',
        constraints: {
          Pattern: /^([0-9]{1,3}\.){3}[0-9]{1,3}(\\/([0-9]|[1-2][0-9]|3[0-2]))?$/
        },
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ManagedClusterAddonProfile: msRest.CompositeMapper = {
  serializedName: "ManagedClusterAddonProfile",
  type: {
    name: "Composite",
    className: "ManagedClusterAddonProfile",
    modelProperties: {
      enabled: {
        required: true,
        serializedName: "enabled",
        type: {
          name: "Boolean"
        }
      },
      config: {
        serializedName: "config",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ManagedClusterAADProfile: msRest.CompositeMapper = {
  serializedName: "ManagedClusterAADProfile",
  type: {
    name: "Composite",
    className: "ManagedClusterAADProfile",
    modelProperties: {
      clientAppID: {
        required: true,
        serializedName: "clientAppID",
        type: {
          name: "String"
        }
      },
      serverAppID: {
        required: true,
        serializedName: "serverAppID",
        type: {
          name: "String"
        }
      },
      serverAppSecret: {
        serializedName: "serverAppSecret",
        type: {
          name: "String"
        }
      },
      tenantID: {
        serializedName: "tenantID",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ManagedClusterProperties: msRest.CompositeMapper = {
  serializedName: "ManagedClusterProperties",
  type: {
    name: "Composite",
    className: "ManagedClusterProperties",
    modelProperties: {
      provisioningState: {
        readOnly: true,
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      },
      kubernetesVersion: {
        serializedName: "kubernetesVersion",
        type: {
          name: "String"
        }
      },
      dnsPrefix: {
        serializedName: "dnsPrefix",
        type: {
          name: "String"
        }
      },
      fqdn: {
        readOnly: true,
        serializedName: "fqdn",
        type: {
          name: "String"
        }
      },
      agentPoolProfiles: {
        serializedName: "agentPoolProfiles",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ManagedClusterAgentPoolProfile"
            }
          }
        }
      },
      linuxProfile: {
        serializedName: "linuxProfile",
        type: {
          name: "Composite",
          className: "ContainerServiceLinuxProfile"
        }
      },
      servicePrincipalProfile: {
        serializedName: "servicePrincipalProfile",
        type: {
          name: "Composite",
          className: "ManagedClusterServicePrincipalProfile"
        }
      },
      addonProfiles: {
        serializedName: "addonProfiles",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Composite",
              className: "ManagedClusterAddonProfile"
            }
          }
        }
      },
      nodeResourceGroup: {
        readOnly: true,
        serializedName: "nodeResourceGroup",
        type: {
          name: "String"
        }
      },
      enableRBAC: {
        serializedName: "enableRBAC",
        type: {
          name: "Boolean"
        }
      },
      networkProfile: {
        serializedName: "networkProfile",
        type: {
          name: "Composite",
          className: "ContainerServiceNetworkProfile"
        }
      },
      aadProfile: {
        serializedName: "aadProfile",
        type: {
          name: "Composite",
          className: "ManagedClusterAADProfile"
        }
      }
    }
  }
};

export const ManagedCluster: msRest.CompositeMapper = {
  serializedName: "ManagedCluster",
  type: {
    name: "Composite",
    className: "ManagedCluster",
    modelProperties: {
      ...Resource.type.modelProperties,
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      kubernetesVersion: {
        serializedName: "properties.kubernetesVersion",
        type: {
          name: "String"
        }
      },
      dnsPrefix: {
        serializedName: "properties.dnsPrefix",
        type: {
          name: "String"
        }
      },
      fqdn: {
        readOnly: true,
        serializedName: "properties.fqdn",
        type: {
          name: "String"
        }
      },
      agentPoolProfiles: {
        serializedName: "properties.agentPoolProfiles",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ManagedClusterAgentPoolProfile"
            }
          }
        }
      },
      linuxProfile: {
        serializedName: "properties.linuxProfile",
        type: {
          name: "Composite",
          className: "ContainerServiceLinuxProfile"
        }
      },
      servicePrincipalProfile: {
        serializedName: "properties.servicePrincipalProfile",
        type: {
          name: "Composite",
          className: "ManagedClusterServicePrincipalProfile"
        }
      },
      addonProfiles: {
        serializedName: "properties.addonProfiles",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Composite",
              className: "ManagedClusterAddonProfile"
            }
          }
        }
      },
      nodeResourceGroup: {
        readOnly: true,
        serializedName: "properties.nodeResourceGroup",
        type: {
          name: "String"
        }
      },
      enableRBAC: {
        serializedName: "properties.enableRBAC",
        type: {
          name: "Boolean"
        }
      },
      networkProfile: {
        serializedName: "properties.networkProfile",
        type: {
          name: "Composite",
          className: "ContainerServiceNetworkProfile"
        }
      },
      aadProfile: {
        serializedName: "properties.aadProfile",
        type: {
          name: "Composite",
          className: "ManagedClusterAADProfile"
        }
      }
    }
  }
};

export const OrchestratorProfile: msRest.CompositeMapper = {
  serializedName: "OrchestratorProfile",
  type: {
    name: "Composite",
    className: "OrchestratorProfile",
    modelProperties: {
      orchestratorType: {
        required: true,
        serializedName: "orchestratorType",
        type: {
          name: "String"
        }
      },
      orchestratorVersion: {
        required: true,
        serializedName: "orchestratorVersion",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AccessProfile: msRest.CompositeMapper = {
  serializedName: "AccessProfile",
  type: {
    name: "Composite",
    className: "AccessProfile",
    modelProperties: {
      kubeConfig: {
        serializedName: "kubeConfig",
        type: {
          name: "ByteArray"
        }
      }
    }
  }
};

export const ManagedClusterAccessProfile: msRest.CompositeMapper = {
  serializedName: "ManagedClusterAccessProfile",
  type: {
    name: "Composite",
    className: "ManagedClusterAccessProfile",
    modelProperties: {
      ...Resource.type.modelProperties,
      kubeConfig: {
        serializedName: "properties.kubeConfig",
        type: {
          name: "ByteArray"
        }
      }
    }
  }
};

export const ManagedClusterPoolUpgradeProfile: msRest.CompositeMapper = {
  serializedName: "ManagedClusterPoolUpgradeProfile",
  type: {
    name: "Composite",
    className: "ManagedClusterPoolUpgradeProfile",
    modelProperties: {
      kubernetesVersion: {
        required: true,
        serializedName: "kubernetesVersion",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      osType: {
        required: true,
        serializedName: "osType",
        defaultValue: 'Linux',
        type: {
          name: "String"
        }
      },
      upgrades: {
        serializedName: "upgrades",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ManagedClusterUpgradeProfileProperties: msRest.CompositeMapper = {
  serializedName: "ManagedClusterUpgradeProfileProperties",
  type: {
    name: "Composite",
    className: "ManagedClusterUpgradeProfileProperties",
    modelProperties: {
      controlPlaneProfile: {
        required: true,
        serializedName: "controlPlaneProfile",
        type: {
          name: "Composite",
          className: "ManagedClusterPoolUpgradeProfile"
        }
      },
      agentPoolProfiles: {
        required: true,
        serializedName: "agentPoolProfiles",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ManagedClusterPoolUpgradeProfile"
            }
          }
        }
      }
    }
  }
};

export const ManagedClusterUpgradeProfile: msRest.CompositeMapper = {
  serializedName: "ManagedClusterUpgradeProfile",
  type: {
    name: "Composite",
    className: "ManagedClusterUpgradeProfile",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      controlPlaneProfile: {
        required: true,
        serializedName: "properties.controlPlaneProfile",
        type: {
          name: "Composite",
          className: "ManagedClusterPoolUpgradeProfile"
        }
      },
      agentPoolProfiles: {
        required: true,
        serializedName: "properties.agentPoolProfiles",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ManagedClusterPoolUpgradeProfile"
            }
          }
        }
      }
    }
  }
};

export const CredentialResult: msRest.CompositeMapper = {
  serializedName: "CredentialResult",
  type: {
    name: "Composite",
    className: "CredentialResult",
    modelProperties: {
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "ByteArray"
        }
      }
    }
  }
};

export const CredentialResults: msRest.CompositeMapper = {
  serializedName: "CredentialResults",
  type: {
    name: "Composite",
    className: "CredentialResults",
    modelProperties: {
      kubeconfigs: {
        readOnly: true,
        serializedName: "kubeconfigs",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CredentialResult"
            }
          }
        }
      }
    }
  }
};

export const OrchestratorVersionProfile: msRest.CompositeMapper = {
  serializedName: "OrchestratorVersionProfile",
  type: {
    name: "Composite",
    className: "OrchestratorVersionProfile",
    modelProperties: {
      orchestratorType: {
        required: true,
        serializedName: "orchestratorType",
        type: {
          name: "String"
        }
      },
      orchestratorVersion: {
        required: true,
        serializedName: "orchestratorVersion",
        type: {
          name: "String"
        }
      },
      default: {
        required: true,
        serializedName: "default",
        type: {
          name: "Boolean"
        }
      },
      upgrades: {
        required: true,
        serializedName: "upgrades",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OrchestratorProfile"
            }
          }
        }
      }
    }
  }
};

export const OrchestratorVersionProfileProperties: msRest.CompositeMapper = {
  serializedName: "OrchestratorVersionProfileProperties",
  type: {
    name: "Composite",
    className: "OrchestratorVersionProfileProperties",
    modelProperties: {
      orchestrators: {
        required: true,
        serializedName: "orchestrators",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OrchestratorVersionProfile"
            }
          }
        }
      }
    }
  }
};

export const OrchestratorVersionProfileListResult: msRest.CompositeMapper = {
  serializedName: "OrchestratorVersionProfileListResult",
  type: {
    name: "Composite",
    className: "OrchestratorVersionProfileListResult",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      orchestrators: {
        required: true,
        serializedName: "properties.orchestrators",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OrchestratorVersionProfile"
            }
          }
        }
      }
    }
  }
};

export const ContainerServiceListResult: msRest.CompositeMapper = {
  serializedName: "ContainerServiceListResult",
  type: {
    name: "Composite",
    className: "ContainerServiceListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ContainerService"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationListResult: msRest.CompositeMapper = {
  serializedName: "OperationListResult",
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OperationValue"
            }
          }
        }
      }
    }
  }
};

export const ManagedClusterListResult: msRest.CompositeMapper = {
  serializedName: "ManagedClusterListResult",
  type: {
    name: "Composite",
    className: "ManagedClusterListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ManagedCluster"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};