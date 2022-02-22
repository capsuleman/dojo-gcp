import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CloudProvider } from './cloudProvider.entity';
import { CloudProviderService } from './cloudProvider.service';
import { CloudProviderDto } from './cloudProviderDto.type';

@Controller('cloud-provider')
export class CloudProviderController {
  constructor(private readonly cloudProviderService: CloudProviderService) {}

  @Get()
  async getCloudProviders(): Promise<CloudProvider[]> {
    console.log('ici');
    return this.cloudProviderService.getCloudProviders();
  }

  @Post()
  async addCloudProvider(
    @Body() cloudProviderDto: CloudProviderDto,
  ): Promise<string> {
    console.log('ici');
    return await this.cloudProviderService.addCloudProvider(cloudProviderDto);
  }
}
