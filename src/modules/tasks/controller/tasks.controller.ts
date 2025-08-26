import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
  Query,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { CreateTaskService } from '../services/createTask.service';
import { ListTasksService } from '../services/listTasks.service';
import { GetTaskService } from '../services/getTask.service';
import { UpdateTaskService } from '../services/updateTask.service';
import { DeleteTaskService } from '../services/deleteTask.service';
import { CreateTaskRequest } from './request/createTask.request';
import { UpdateTaskRequest } from './request/updateTask.request';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';
import { GetUser } from 'src/modules/auth/decorators/getUser.decorator';
import { User } from 'src/modules/users/entities/user.entity';
import { ListTasksRequest } from './request/listTasks.request';
import { parseQueryFilters } from 'src/shared/helpers/filters/parsers/parseQueryFilters';

@ApiTags('Tasks')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('todos')
export class TaskController {
  constructor(
    private readonly createTaskService: CreateTaskService,
    private readonly listTasksService: ListTasksService,
    private readonly getTaskService: GetTaskService,
    private readonly updateTaskService: UpdateTaskService,
    private readonly deleteTaskService: DeleteTaskService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new task' })
  @ApiResponse({
    status: 201,
    description: 'The task has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createTaskRequest: CreateTaskRequest, @GetUser() user: User) {
    return this.createTaskService.create(createTaskRequest, user.id);
  }

  @Get()
  @ApiOperation({ summary: 'List all tasks' })
  @ApiResponse({ status: 200, description: 'Return all tasks.' })
  findAll(@Query() query: ListTasksRequest, @GetUser() user: User) {
    return this.listTasksService.execute(user.id, parseQueryFilters(query));
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a task by id' })
  @ApiResponse({ status: 200, description: 'Return the task.' })
  @ApiResponse({ status: 404, description: 'Task not found.' })
  findOne(@Param('id') id: string) {
    return this.getTaskService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a task' })
  @ApiResponse({
    status: 200,
    description: 'The task has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Task not found.' })
  update(
    @Param('id') id: string,
    @Body() updateTaskRequest: UpdateTaskRequest,
  ) {
    return this.updateTaskService.update(id, updateTaskRequest);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a task' })
  @ApiResponse({
    status: 204,
    description: 'The task has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Task not found.' })
  remove(@Param('id') id: string) {
    return this.deleteTaskService.delete(id);
  }
}
